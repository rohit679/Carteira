import assert from 'assert';
import md5 from 'md5';
import { Mongoose } from 'mongoose';
import { nanoid } from 'nanoid';
import authModel from '../model';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';

const authService = {};

authService.registerUser = async (data) => {
    const {email, password} = data;
    const encryptedPassword = md5(password);

    const doesEmailExist = authModel.user.findOne({ email });

    assert(
        doesEmailExist === null,
        createError(StatusCodes.FORBIDDEN, 'This Email address already exist.')
    );

    await authModel.user.create({...data, password : encryptedPassword});
};

authService.loginUser = async (data) => {
    const { email, password } = data;

    const user = await authModel.user.findOne({ email });
    
    assert(
        user != null, 
        createError(StatusCodes.BAD_REQUEST, 'Login with Invalid Email')
    );

    assert(
        user.password === md5(password),
        createError(StatusCodes.UNAUTHORIZED, 'Incorrect Password')
    );
};

authService.resetPasswordRequest = async (email) => {
    const token = nanoid(50);
    await authModel.reset_password.create({token, email});
    return token;
};

authService.resetPassword = async ({token, newPassword}) => {
    const encryptedPassword = md5(newPassword);
    const data = authModel.reset_password.findOne({token});
    const {email} = data;
    await authModel.user.updateOne({email}, {password : encryptedPassword});
    await authModel.reset_password.deleteOne({token});
};

authService.changePassword = async ({oldPassword, newPassword, email}) => {
    const user = authModel.user.findOne({email});
    assert(
        md5(oldPassword) === user.password,
        createError(StatusCodes.UNAUTHORIZED, 'Please enter the correct old password')
    );
    const encryptedPassword = md5(newPassword);
    await authModel.user.findOneAndUpdate({email},{password : encryptedPassword});
};

export default authService;