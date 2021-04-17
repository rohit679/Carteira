import { Router } from 'express';
import {httpHandler} from '../../common/http-handler';
import linkServices from '../service';

const router = Router();

router.get(
    '/get-all-links',
    httpHandler(async (req, res) => {
        const links = await linkServices.getAllLinks();
        res.send(links);
    })
);

router.get(
    '/get-a-link/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        const link = await linkServices.getALink(id);
        res.send(link);
    })
);

router.post(
    '/set-link',
    httpHandler(async (req, res) => {
        const data = req.body;
        await linkServices.setLink(data);
        res.send({
            message : 'Link created successfully !'
        });
    })
);

router.put(
    '/update-link',
    httpHandler(async (req, res) => {
        const {id, data} = req.body;
        await linkServices.updateLink({id, data});
        res.send({
            message : 'Link updated successfully !'
        });
    })
);

router.delete(
    '/delete-link/:id',
    httpHandler(async (req, res) => {
        const id = req.params.id;
        await linkServices.deleteLink(id);
        res.send({
            message : 'Link deleted successfully !'
        });
    })
);

export default router;