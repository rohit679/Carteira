import educationRouter from "./router";
import { Router } from "express";

const router = Router();
router.use("/education", educationRouter);

const educationModule = {
  init: (app) => {
    app.use(router);
    console.log("Education module Loaded !");
  },
};

export default educationModule;
