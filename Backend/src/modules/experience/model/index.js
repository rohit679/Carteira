import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    job_title : {
        type : String,
        required : true
    },
    job_type : {
        type : String,
    },
    company_name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    joining_date : {
        type : String,
    },
    ending_date : {
        type : String,
    },
    description : {
        type : Array,
    }
});

export default mongoose.model('experiences', experienceSchema);