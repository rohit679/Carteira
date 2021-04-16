import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    institute_name : {
        type : String,
        required : true
    },
    degree_name : {
        type : String,
        required : true
    },
    field : {
        type : String,
    },
    start_year : {
        type : String,
        required : true
    },
    end_year : {
        type : String,
        required : true
    },
    grade : {
        type : String,
        required : true
    },
    description : {
        type : Array
    }
});

export default mongoose.model('education', educationSchema);