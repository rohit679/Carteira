import { Router } from 'express';
import linkRouter from './router';

const router = Router();
router.use('/link', linkRouter);

const linkModule = {
    init : (app) => {
        app.use(router);
        console.log('Link module Loaded !');
    }
}

export default linkModule;