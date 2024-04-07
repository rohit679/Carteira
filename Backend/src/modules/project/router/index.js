import projectServices from "../service";
import { httpHandler } from "../../../utils/http-handler.js";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  httpHandler(async (req, res) => {
    const data = req.body;
    const details = await projectServices.getAllProjects(data);
    res.send(details);
  })
);

router.get(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const details = await projectServices.getAProject(id);
    res.send(details);
  })
);

router.post(
  "/add",
  httpHandler(async (req, res) => {
    const data = req.body;
    await projectServices.addProject(data);
    res.send({
      message: "project successfully added !",
    });
  })
);

router.put(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log("@@@@: ", id, data);
    await projectServices.updateProject({ id, data });
    res.send({
      message: "project updated successfully !",
    });
  })
);

router.delete(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    await projectServices.deleteProject(id);
    res.send({
      message: "project deleted successfully !",
    });
  })
);

export default router;
