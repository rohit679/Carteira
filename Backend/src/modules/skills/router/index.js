import skillServices from "../service";
import { Router } from "express";
import { httpHandler } from "../../common/http-handler";

const router = Router();

router.get(
  "/",
  httpHandler(async (req, res) => {
    const skills = await skillServices.getAllSkills();
    res.send(skills);
  })
);

router.get(
  "/id/:id",
  httpHandler(async (req, res) => {
    const skill_id = req.params.id;
    const skill = await skillServices.getASkill(skill_id);
    res.send(skill);
  })
);

router.post(
  "/add",
  httpHandler(async (req, res) => {
    const data = req.body;
    await skillServices.setSkill(data);
    res.send({
      message: "skill created successfully !",
    });
  })
);

router.put(
  "/id/:id",
  httpHandler(async (req, res) => {
    const id = req.params.id;
    const { data } = req.body;
    await skillServices.updateSkill({ id, data });
    res.send({
      message: "skill name updated successfully !",
    });
  })
);

router.delete(
  "/id/:id",
  httpHandler(async (req, res) => {
    const skill_id = req.params.id;
    await skillServices.deleteSkill(skill_id);
    res.send({
      message: "skill deleted successfully !",
    });
  })
);

export default router;
