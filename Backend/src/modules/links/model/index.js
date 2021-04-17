import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    link_name : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    }
});

export default mongoose.model('links', linkSchema);