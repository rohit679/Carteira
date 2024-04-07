import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  tenure: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
  },
  description: {
    type: Array,
    default: [],
  },
  is_active: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("education", educationSchema);
