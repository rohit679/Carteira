import createError from "http-errors-lite";
import { StatusCodes } from "http-status-codes";
import { httpHandler } from "../utils/http-handler.js";
import userModel from "../modules/auth/model/index.js";

export const checkRole = (roles) => httpHandler(async (req, res, next) => {
  let { id } = req.user;
  const user = await userModel.findById(id);
  if(!roles.includes(user.role)) {
    throw createError(
      StatusCodes.UNAUTHORIZED,
      'Access denied'
    );
  }
  next();
});