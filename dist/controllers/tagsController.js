"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTag = void 0;
const utils_1 = require("../utils");
const tags_1 = __importDefault(require("../models/tags"));
const addTag = (req, res, next) => {
    try {
        const { title } = req.body;
        const newTag = new tags_1.default({
            title,
        });
        newTag.save();
        return res.send((0, utils_1.successResponse)("tag added successfully", null));
    }
    catch (error) {
        next(error);
    }
};
exports.addTag = addTag;
