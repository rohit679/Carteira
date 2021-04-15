import mongoose from 'mongoose';

const resetPasswordSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true     
    },
    token : {
        type : String,
        required : true
    }
});

export default mongoose.Model('reset_password', resetPasswordSchema);