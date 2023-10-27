// import mongoose from "mongoose";
// import { nanoid } from "nanoid";
const { nanoid } = require("nanoid");
const mongoose = require("mongoose");

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

// const SectionTag = mongoose.model("sectiontag", sectionTagSchema);

// export default SectionTag;

module.exports = mongoose.model("sectiontag", sectionTagSchema);