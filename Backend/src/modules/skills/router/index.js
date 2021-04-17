import skillServices from '../service';
import { Router } from 'express';
import {httpHandler} from '../../common/http-handler';

const router = Router();

router.get(
    '/get-all-skills',
    httpHandler(async (req, res) => {
        const skills = await skillServices.getAllSkills();
        res.send(skills);
    })
);

router.get(
    '/get-a-skill/:skill_id',
    httpHandler(async (req, res) => {
        const skill_id = req.params.skill_id;
        const skill = await skillServices.getASkill(skill_id);
        res.send(skill);
    })
);

router.post(
    '/set-skill',
    httpHandler(async (req, res) => {
        const {skill_name, skill_percent} = req.body;
        await skillServices.setSkill({skill_name, skill_percent});
        res.send({
            message : 'skill created successfully !'
        });
    })
);

router.put(
    '/update-skill-name',
    httpHandler(async (req, res) => {
        const {skill_id, skill_name} = req.body;
        await skillServices.updateSkillName({skill_id, skill_name});
        res.send({
            message : 'skill name updated successfully !'
        });
    })
);

router.put(
    '/update-skill-percent',
    httpHandler(async (req, res) => {
        const {skill_id, skill_percent} = req.body;
        await skillServices.updateSkillPercent({skill_id, skill_percent});
        res.send({
            message : 'skill percent updated successfully !'
        });
    })
);

router.delete(
    '/delete-skill/:skill_id',
    httpHandler(async (req, res) => {
        const skill_id = req.params.skill_id;
        await skillServices.deleteSkill(skill_id);
        res.send({
            message : 'skill deleted successfully !'
        });
    })
);

export default router;