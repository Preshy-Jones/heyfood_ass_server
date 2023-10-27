import mongoose from "mongoose";
import { nanoid } from "nanoid";

const { Schema } = mongoose;

const sectionTagSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tag = mongoose.model("sectiontag", sectionTagSchema);

export default Tag;
