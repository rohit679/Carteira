import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    skill_name : {
        type : String,
        required : true,
        unique : true
    },
    skill_percent : {
        type : String,
        required : true
    }
});

export default mongoose.model('skills', skillSchema);