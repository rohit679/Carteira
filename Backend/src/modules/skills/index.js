import { Router } from "express";
import skillRouter from "./router";

const router = Router();
router.use("/skill", skillRouter);

const skillModule = {
  init: (app) => {
    app.use(router);
    console.log("Skill module Loaded");
  },
};

export default skillModule;
