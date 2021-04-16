import { Router } from 'express';
import educationServices from '../service';
import {httpHandler} from '../../common/http-handler';

const router = Router();

router.get(
    '/get-all-education-details',
    httpHandler(async (req, res) => {
        const details = await educationServices.getAllEducationDetails();
        res.send(details);
    })
);

router.get(
    '/get-an-education-detail/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        const details = await educationServices.getAnEducationDetail(id);
        res.send(details);
    })
);

router.post(
    '/add-education-detail',
    httpHandler(async (req, res) => {
        const data = req.body;
        await educationServices.setEducationDetail(data);
        res.send({
            message : 'Education detail created successfully !'
        })
    })
);

router.put(
    '/update-education-detail',
    httpHandler(async (req, res) => {
        const {id, data} = req.body;
        await educationServices.updateEducationDetail({id, data});
        res.send({
            message : 'Education detail updated successfully !'
        });
    })
);

router.delete(
    '/delete-education-detail/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        await educationServices.deleteAnEducationDetail(id);
        res.send({
            message : 'Education detail deleted successfully !'
        });
    })
);

export default router;