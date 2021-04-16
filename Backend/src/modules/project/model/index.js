import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    project_name : {
        type : String,
        required : true
    },
    start_date : {
        type : String,
    },
    end_date : {
        type : String
    },
    project_member : {
        type : Array
    },
    project_url : {
        type : String
    },
    description : {
        type : Array
    }
});

export default mongoose.model('project', projectSchema);