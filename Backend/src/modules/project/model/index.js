import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tenure: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["personal", "company"]
  },
  project_url: {
    type: String,
  },
  description: {
    type: Array,
    required: true,
    default: []
  },
});

export default mongoose.model("project", projectSchema);