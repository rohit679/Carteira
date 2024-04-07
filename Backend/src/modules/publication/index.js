import { Router } from "express";
import publicationRouter from "./router";

const router = Router();
router.use("/publication", publicationRouter);

const publicationModule = {
  init: (app) => {
    app.use(router);
    console.log("Publication module Loaded");
  },
};

export default publicationModule;
