import mongoose from 'mongoose';

const personalInfoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    zip : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
});

export default mongoose.model('personal_details', personalInfoSchema);