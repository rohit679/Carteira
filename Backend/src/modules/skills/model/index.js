import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["technology", "tool"],
    default: "technology",
  },
  url: {
    type: String,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("skills", skillSchema);
