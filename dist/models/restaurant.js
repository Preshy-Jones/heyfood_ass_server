"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const { Schema } = mongoose_1.default;
const restaurantSchema = new Schema({
    _id: {
        type: String,
        default: () => (0, nanoid_1.nanoid)(),
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
const Restaurant = mongoose_1.default.model("restaurant", restaurantSchema);
exports.default = Restaurant;
