import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  tenure: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
    default: []
  },
  is_active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("experiences", experienceSchema);