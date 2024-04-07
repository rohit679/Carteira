import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getSecret } from "../../../configuration.js";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["admin", "subadmin"],
      default: "subadmin",
      trim: true,
    },
    username: {
      type: String,
      unique: [true, "username must be unique"],
      required: [true, "username is required"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refresh_token: {
      type: String,
    },
  },
  { strict: false, timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  const secret = getSecret();
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      role: this.role,
    },
    secret.accessTokenSecret,
    {
      expiresIn: secret.accessTokenExpiresIn,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  const secret = getSecret();
  return jwt.sign(
    {
      id: this._id,
    },
    secret.refreshTokenSecret,
    {
      expiresIn: secret.refreshTokenExpiresIn,
    }
  );
};

export default mongoose.model("users", userSchema);
