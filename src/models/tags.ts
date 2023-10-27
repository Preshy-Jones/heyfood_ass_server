//import mongoose from "mongoose";
// import { nanoid } from "nanoid";
const { nanoid } = require("nanoid");
const mongoose = require("mongoose");

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

//const Tag = mongoose.model("tag", tagSchema);

// export default Tag;

module.exports = mongoose.model("tag", tagSchema);
