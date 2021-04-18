import { Router } from 'express';
import {httpHandler} from '../../common/http-handler';
import personalInfoServices from '../service';

const router = Router();

router.get(
    '/get-all-personal-info',
    httpHandler(async (req, res) => {
        const details = await personalInfoServices.getAllpersonalInfos();
        res.send(details);
    })
);

router.get(
    '/get-an-personal-info/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        const detail = await personalInfoServices.getAnpersonalInfo(id);
        res.send(detail);
    })
);

router.post(
    '/set-personal-info',
    httpHandler(async (req, res) => {
        const data = req.body;
        await personalInfoServices.setpersonalInfo(data);
        res.send({
            message : 'personal information successfully set !'
        });
    })  
);

router.put(
    '/update-personal-info',
    httpHandler(async (req, res) => {
        const {id, data} = req.body;
        await personalInfoServices.updatepersonalInfo({id, data});
        res.send({
            message : 'personal information successfully updated !'
        });
    })
);

router.delete(
    '/delete-personal-info/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        await personalInfoServices.deletepersonalInfo(id);
        res.send({
            message : 'personal information successfully deleted !'
        });
    })
);

export default router;






































