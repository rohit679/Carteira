import { Router } from "express";
import educationServices from "../service";
import { httpHandler } from "../../../utils/http-handler.js";

const router = Router();

router.get(
  "/",
  httpHandler(async (req, res) => {
    const data = req.body;
    const details = await educationServices.getAllEducationDetails(data ? data : {});
    res.send(details);
  })
);

router.get(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const details = await educationServices.getAnEducationDetail(id);
    res.send(details);
  })
);

router.post(
  "/add",
  httpHandler(async (req, res) => {
    const data = req.body;
    await educationServices.addEducationDetail(data);
    res.send({
      message: "Education detail created successfully !",
    });
  })
);

router.put(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await educationServices.updateEducationDetail({ id, data });
    res.send({
      message: "Education detail updated successfully !",
    });
  })
);

router.delete(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    await educationServices.deleteAnEducationDetail(id);
    res.send({
      message: "Education detail deleted successfully !",
    });
  })
);

export default router;
