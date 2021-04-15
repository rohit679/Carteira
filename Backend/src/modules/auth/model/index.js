import userModel from './user_model';
import resetPasswordModel from './reset_password_model';

const authModel = {
    user : userModel,
    reset_password : resetPasswordModel
}

export default authModel;