import { Router } from 'express';
import {httpHandler} from '../../common/http-handler';
import experienceServices from '../service';

const router = Router();

router.get(
    '/get-all-experiences',
    httpHandler(async (req, res) => {
        const details = await experienceServices.getAllExperiences();
        res.send(details);
    })
);

router.get(
    '/get-an-experience/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        const detail = await experienceServices.getAnExperience(id);
        res.send(detail);
    })
);

router.post(
    '/set-experience',
    httpHandler(async (req, res) => {
        const data = req.body;
        await experienceServices.setExperience(data);
        res.send({
            message : 'Experience successfully set !'
        });
    })  
);

router.put(
    '/update-experience',
    httpHandler(async (req, res) => {
        const {id, data} = req.body;
        await experienceServices.updateExperience({id, data});
        res.send({
            message : 'Experience successfully updated !'
        });
    })
);

router.delete(
    '/delete-experience/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        await experienceServices.deleteExperience(id);
        res.send({
            message : 'Experience successfully deleted !'
        });
    })
);

export default router;






































