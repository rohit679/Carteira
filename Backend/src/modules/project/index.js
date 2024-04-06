import { Router } from "express";
import projectRouter from "./router";

const router = Router();
router.use("/project", projectRouter);

const projectModule = {
  init: (app) => {
    app.use(router);
    console.log("Project module Loaded");
  },
};

export default projectModule;
