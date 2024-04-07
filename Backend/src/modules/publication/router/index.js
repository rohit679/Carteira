import publicationServices from "../service";
import { httpHandler } from "../../../utils/http-handler.js";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  httpHandler(async (req, res) => {
    const data = req.body;
    const details = await publicationServices.getAllPublications(
      data ? data : {}
    );
    res.send(details);
  })
);

router.get(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const details = await publicationServices.getAPublication(id);
    res.send(details);
  })
);

router.post(
  "/add",
  httpHandler(async (req, res) => {
    const data = req.body;
    await publicationServices.addPublication(data);
    res.send({
      message: "publication successfully added !",
    });
  })
);

router.put(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await publicationServices.updatePublication({ id, data });
    res.send({
      message: "publication updated successfully !",
    });
  })
);

router.delete(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    await publicationServices.deletePublication(id);
    res.send({
      message: "publication deleted successfully !",
    });
  })
);

export default router;
