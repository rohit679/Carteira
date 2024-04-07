import createError from "http-errors-lite";
import userModel from "../model/index.js";
import { StatusCodes } from "http-status-codes";
import assert from "assert";

const authService = {};

authService.registerUser = async ({ username, password }) => {
  const user = await userModel.findOne({ username });
  assert(
    !user,
    createError(StatusCodes.BAD_REQUEST, "Username already exists")
  );
  const createdUser = await userModel.create({ username, password });

  if (!createdUser) {
    throw createError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Error while registering the user"
    );
  }

  const result = await userModel.findOne(
    { _id: createdUser._id },
    { password: 0, refresh_token: 0, __v: 0 }
  );
  return result;
};

authService.loginUser = async ({ username, password }) => {
  const user = await userModel.findOne({ username });
  assert(user, createError(StatusCodes.BAD_REQUEST, "Username not found"));
  const isPasswordValid = await user.isPasswordCorrect(password);
  assert(
    isPasswordValid,
    createError(StatusCodes.UNAUTHORIZED, "Invalid user credentials")
  );

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );
  const loggedInUser = await userModel.findById(user._id, {
    password: 0,
    refresh_token: 0,
    __v: 0,
  });
  return { data: loggedInUser, accessToken, refreshToken };
};

authService.logoutUser = async (id) => {
  await userModel.findByIdAndUpdate(
    id,
    { $unset: { refresh_token: 1 } },
    { new: true }
  );
};

authService.refreshAccessToken = async ({ body, cookies }) => {
  const loggedInUser = await refreshAccessToken({ body, cookies });
  const { accessToken, newRefreshToken } =
    await generateAccessAndRefereshTokens(loggedInUser._id);
  return { accessToken, newRefreshToken };
};

authService.changeCurrentPassword = async ({
  id,
  old_password,
  new_password,
}) => {
  const user = await userModel.findById(id);
  const isPasswordCorrect = await user.isPasswordCorrect(old_password);

  assert(
    isPasswordCorrect,
    createError(StatusCodes.BAD_REQUEST, "Invalid old password")
  );

  assert(
    old_password != new_password,
    createError(StatusCodes.BAD_REQUEST, "Old & new password can't be same")
  );

  user.password = new_password;
  await user.save({ validateBeforeSave: false });
};

// authService.getUserById = async ({ id, loggedInUser }) => {
//   const user = await userBusiness.validateUserId({ id, loggedInUser });
//   return user;
// };

// authService.getFilteredUsers = async ({
//   query,
//   search,
//   page_number,
//   page_size,
//   sort,
//   loggedInUser,
// }) => {
//   const roleBasedFilter = { role_rank: { $gt: loggedInUser.role_rank } };
//   const searchFilterObj = await userBusiness.getSearchFilterObj(search);
//   let skip = (page_number - 1) * page_size;
//   const users = await userModel
//     .find(
//       { ...query, ...searchFilterObj, ...roleBasedFilter },
//       { __v: 0, password: 0, refresh_token: 0 }
//     )
//     .skip(skip)
//     .limit(page_size)
//     .sort(sort);
//   return users;
// };

// authService.updateUser = async ({ loggedInUser, id, payload }) => {
//   const user = await userBusiness.validateUserId({ id, loggedInUser });
//   userBusiness.validateUpdateUserPayload(payload);

//   const finalPayload = userBusiness.updateUserFinalPayload(
//     loggedInUser,
//     payload,
//     user
//   );
//   await userModel.findOneAndUpdate({ _id: id }, finalPayload);

//   const updatedUser = await userModel.findById(id, {
//     __v: 0,
//     password: 0,
//     refresh_token: 0,
//   });
//   return updatedUser;
// };

// authService.deleteUsers = async ({ id, loggedInUser }) => {
//   await userBusiness.validateUserId({ id, loggedInUser });
//   await userModel.deleteOne(id);
// };

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refresh_token = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (err) {
    throw createError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Error while generating referesh and access token"
    );
  }
};

const refreshAccessToken = async ({ body, cookies }) => {
  const incomingRefreshToken = cookies.refreshToken || body.refresh_token;
  if (!incomingRefreshToken) {
    throw createError(StatusCodes.UNAUTHORIZED, "Unauthorized request");
  }

  const secret = getSecret();
  const decodedToken = jwt.verify(
    incomingRefreshToken,
    secret.refreshTokenSecret
  );

  const user = await userModel.findById(decodedToken && decodedToken.id, {
    __v: 0,
    password: 0,
  });
  if (!user) {
    throw createError(StatusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  if (incomingRefreshToken !== user && user.refresh_token) {
    throw createError(
      StatusCodes.UNAUTHORIZED,
      "Refresh token is expired or used"
    );
  }
  delete user.refresh_token;
  return user;
};

export default authService;
