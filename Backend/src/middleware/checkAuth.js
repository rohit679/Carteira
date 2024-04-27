import jwt from "jsonwebtoken";
import createError from "http-errors-lite";
import { StatusCodes } from "http-status-codes";
import { getSecret } from "../configuration.js";
import { httpHandler } from "../utils/http-handler.js";
import userModel from "../modules/auth/model/index.js";

export const verifyJWT = httpHandler(async (req, res, next) => {
  try {
    const token =
      (req.cookies && req.cookies.accessToken) ||
      (req.header("Authorization") &&
        req.header("Authorization").replace("Bearer ", ""));
    if (!token) {
      throw createError(StatusCodes.UNAUTHORIZED, "Unauthorized request");
    }

    const secret = getSecret();
    const decodedToken = jwt.verify(token, secret.accessTokenSecret);
    const user = await userModel.findById(decodedToken && decodedToken.id, {
      __v: 0,
      password: 0,
    });

    if (!user || !user.refresh_token) {
      throw createError(StatusCodes.UNAUTHORIZED, "Invalid access token");
    }

    req.user = {
      "_id": user._id,
      "email": user.email,
    };
    next();
  } catch (err) {
    throw createError(
      StatusCodes.UNAUTHORIZED,
      `${(err && err.message) || "Invalid access token"}`
    );
  }
});
