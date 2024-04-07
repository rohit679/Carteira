import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tenure: {
    type: String,
    required: true,
  },
  published_for: {
    type: String,
    required: true,
  },
  project_url: {
    type: String,
  },
  description: {
    type: Array,
    required: true,
    default: [],
  },
  is_active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("publication", publicationSchema);
