import mongoose from "mongoose";
import { nanoid } from "nanoid";

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    ref: "tag",
  },
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

export default Restaurant;
