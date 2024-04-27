import authService from "../service";
import { httpHandler } from "../../../utils/http-handler.js";
import { Router } from "express";
import { verifyJWT } from "../../../middleware/checkAuth.js";

const userRouter = Router();

userRouter.post(
  "/register",
  httpHandler(async (req, res) => {
    const details = req.body;
    const user = await authService.registerUser(details);
    res.send({
      data: user,
      message: "user registered successfully",
    });
  })
);

userRouter.post(
  "/login",
  httpHandler(async (req, res) => {
    const { email, password } = req.body;
    const data = await authService.loginUser({ email, password });

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .cookie("accessToken", data.accessToken, options)
      .cookie("refreshToken", data.refreshToken, options)
      .send({
        error: false,
        data: data.data,
        message: "User Signed in successfully",
        token: data.accessToken,
      });
  })
);

userRouter.post(
  "/logout",
  verifyJWT,
  httpHandler(async (req, res) => {
    await authService.logoutUser(req.user.id);
    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .send({
        error: false,
        data: [],
        message: "User Signed out successfully",
      });
  })
);

userRouter.post(
    '/refresh-token',
    verifyJWT,
    httpHandler(async (req, res) => {
      const { body, cookies } = req;
      const token = await authService.refreshAccessToken({ body, cookies });
      const options = {
        httpOnly: true,
        secure: true
      };
  
      res
      .status(200)
      .cookie("accessToken", token.accessToken, options)
      .cookie("refreshToken", token.newRefreshToken, options)
      .send({
        error: false,
        data: [],
        message: "Acsess token refreshed",
      });
    })
  );
  
  userRouter.post(
    '/change-password',
    verifyJWT,
    httpHandler(async (req, res) => {
      const { old_password, new_password } = req.body;
      await authService.changeCurrentPassword({ id: req.user.id, old_password, new_password });
  
      res.send({
        error: false,
        data: [],
        message: "Password changed successfully",
      });
    })
  );

  userRouter.post(
    '/forgot-password',
    httpHandler(async (req, res) => {
      const { email } = req.body;
      await authService.forgotPassword({ email });
  
      res.send({
        error: false,
        data: [],
        message: "Reset Password link sent",
      });
    })
  );

  userRouter.post(
    '/reset-password/:user_id/:token',
    httpHandler(async (req, res) => {
      const { password } = req.body;
      const { user_id, token } = req.params;
      await authService.resetPassword({ user_id, token, password });
  
      res.send({
        error: false,
        data: [],
        message: "Password updated successfully",
      });
    })
  );
  
  userRouter.get(
    '/current-user',
    verifyJWT,
    httpHandler(async (req, res) => {
      res.send({
        error: false,
        data: req.user,
        message: "User fetched successfully",
      });
    })
  );

export default userRouter;
