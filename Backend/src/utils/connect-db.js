import mongoose from "mongoose";
import { getSecret } from "../configuration.js";

export const connectMongo = async () => {
  try {
    const mongoUrl = getSecret().mongoUrl;
    await mongoose.connect(mongoUrl, {
      dbName: 'carteira',
      useUnifiedTopology: true,
      useFindAndModify: true
    });
    console.log("Database connected successfully ✨");
  } catch (err) {
    console.error("Database connection error 💩");
  }
}