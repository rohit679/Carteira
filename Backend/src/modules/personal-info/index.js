import { Router } from 'express';
import personalInfoRouter from './router';

const router = Router();

router.use('/personal-info', personalInfoRouter);

const personalInfoModule = {
    init : (app) => {
        app.use(router);
        console.log('personalInfo module Loaded');
    }
}

export default personalInfoModule;