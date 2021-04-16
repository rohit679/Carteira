import { Router } from 'express';
import experienceRouter from './router';

const router = Router();

router.use('/experience', experienceRouter);

const experienceModule = {
    init : (app) => {
        app.use(router);
        console.log('Experience module Loaded');
    }
}

export default experienceModule;