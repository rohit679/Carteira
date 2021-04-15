import authService from '../service';
import {httpHandler} from '../../common/http-handler';
import {Router} from 'express';

const router = Router();

router.post(
    '/register', httpHandler(async (req, res) => {
        const details = req.body;
        await authService.registerUser(details);
        res.send({
            message : 'user registered successfully'
        });
    })
);

router.post(
    '/login',
    httpHandler(async (req, res) => {
        const details = req.body;
        await authService.loginUser(details);
        res.send({
            message : 'user successfully logged In'
        });
    })
);

router.get(
    '/reset-password-request',
    httpHandler(async (req, res) => {
        const {email} = req.body;
        const token = await authService.resetPasswordRequest(email);
        res.send({token});
    })
);

router.put(
    '/reset-password',
    httpHandler(async (req, res) => {
        const {token, newPassword} = req.body;
        await authService.resetPassword({token, newPassword});
        res.send({message : 'password changed successfully'});
    })
);

router.post(
    '/change-password', 
    httpHandler(async (req, res) => {
        const {old_password, new_password, email} = req.body;
        await authService.changePassword({old_password, new_password, email});
        res.send({message : 'password changed successfully'});
    })
);

export default router;







































