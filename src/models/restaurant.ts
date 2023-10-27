import mongoose from "mongoose";
import { nanoid } from "nanoid";

const { Schema } = mongoose;
const ratingsSchema = new Schema({
  rating: {
    type: Number,
  },
});

const restaurantSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  title: {
    type: String,
    required: true,
  },
  ratings: {
    type: [ratingsSchema],
    required: true,
  },
  tags: {
    type: [String],
    ref: "tag",
  },
  sectionTag: {
    type: String,
    ref: "sectiontag",
  },
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

export default Restaurant;
