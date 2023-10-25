import mongoose from "mongoose";
import { nanoid } from "nanoid";

const { Schema } = mongoose;

const tagSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  iconUrl: {
    type: String,
    required: true,
  },
});

const Tag = mongoose.model("tag", tagSchema);

export default Tag;
