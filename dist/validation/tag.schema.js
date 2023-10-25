"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        title: (0, zod_1.string)({
            required_error: "Title is required",
        }),
    }),
};
exports.AddTagSchema = (0, zod_1.object)(Object.assign({}, payload));
