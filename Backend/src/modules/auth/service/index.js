import createError from "http-errors-lite";
import userModel from "../model/index.js";
import { StatusCodes } from "http-status-codes";
import MailChecker from "mailchecker";
import assert from "assert";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { getSecret } from "../../../configuration.js";
import sendEmail from "../../../utils/send-mail.js";

const authService = {};

authService.registerUser = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  assert(!user, createError(StatusCodes.BAD_REQUEST, "Email already exists"));
  assert(
    MailChecker.isValid(email),
    createError(StatusCodes.BAD_REQUEST, "Invalid Email provided")
  );
  const createdUser = await userModel.create({ email, password });
  return createdUser;
};

authService.loginUser = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  assert(user, createError(StatusCodes.BAD_REQUEST, "Email doesn't exists"));
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
    reset_password_token: 0,
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

authService.forgotPassword = async ({ email }) => {
  const secret = getSecret();
  const user = await userModel.findOne({ email });
  assert(user, createError(StatusCodes.BAD_REQUEST, "Email doesn't exists"));

  const token = user.reset_password_token;
  if (!token) {
    user.reset_password_token = crypto.randomBytes(32).toString("hex");
    await user.save({ validateBeforeSave: false });
  }

  const link = `${secret.baseUrl}/${user._id}/${user.reset_password_token}`;
  await sendEmail(user.email, "Password reset", link);
};

authService.resetPassword = async ({ user_id, token, password }) => {
  const user = await userModel.findOne({
    _id: user_id,
    reset_password_token: token,
  });
  assert(
    user,
    createError(StatusCodes.BAD_REQUEST, "Invalid details")
  );

  user.password = password;
  await user.save();
  await userModel.findByIdAndUpdate(
    user_id,
    { $unset: { reset_password_token: 1 } },
    { new: true }
  );
};

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
  const incomingRefreshToken =
    (cookies && cookies.refreshToken) || (body && body.refresh_token);
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
    reset_password_token: 0,
  });
  if (!user) {
    throw createError(StatusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  if (incomingRefreshToken !== user.refresh_token) {
    throw createError(
      StatusCodes.UNAUTHORIZED,
      "Refresh token is expired or used"
    );
  }
  delete user.refresh_token;
  return user;
};

export default authService;
