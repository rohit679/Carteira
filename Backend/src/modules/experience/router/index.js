import { Router } from "express";
import { httpHandler } from "../../../utils/http-handler.js";
import experienceServices from "../service";

const router = Router();

router.get(
  "/",
  httpHandler(async (req, res) => {
    const data = req.body;
    const details = await experienceServices.getAllExperiences(data);
    res.send(details);
  })
);

router.get(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const detail = await experienceServices.getAnExperience(id);
    res.send(detail);
  })
);

router.post(
  "/add",
  httpHandler(async (req, res) => {
    const data = req.body;
    await experienceServices.addExperience(data);
    res.send({
      message: "Experience successfully set !",
    });
  })
);

router.put(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await experienceServices.updateExperience({ id, data });
    res.send({
      message: "Experience successfully updated !",
    });
  })
);

router.delete(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    await experienceServices.deleteExperience(id);
    res.send({
      message: "Experience successfully deleted !",
    });
  })
);

export default router;
