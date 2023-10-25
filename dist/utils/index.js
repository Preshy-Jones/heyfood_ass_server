"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeString = exports.successResponse = void 0;
const successResponse = (message, data) => {
    return {
        status: "success",
        message,
        data,
    };
};
exports.successResponse = successResponse;
function capitalizeString(s) {
    if (typeof s !== "string")
        return "";
    s = s.toLowerCase();
    return s
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
}
exports.capitalizeString = capitalizeString;
