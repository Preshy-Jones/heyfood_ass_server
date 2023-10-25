"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const notFoundHandler = (req, res) => {
    return res.status(404).send({
        status: "error",
        message: "endpoint not found",
    });
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (err, req, res, next) => {
    //  console.log(`res.headersSent: ${res.headersSent}`);
    // console.log(err.name);
    if (res.headersSent) {
        return next(err);
    }
    switch (err.name) {
        case "ServiceError":
            return res.status(400).send({
                status: "error",
                message: err.message,
            });
        case "NotFoundError":
            return res.status(404).send({
                status: "error",
                message: err.message,
            });
        case "ValidationError":
            return res.status(422).send({
                status: "error",
                message: err.message,
                // errors: err.errors,
            });
        case "AuthenticationError":
            return res.status(401).send({
                status: "error",
                message: err.message,
            });
        case "AuthorizationError":
            return res.status(403).send({
                status: "error",
                message: err.message,
            });
        case "ConflictError":
            return res.status(409).send({
                status: "error",
                message: err.message,
            });
        default:
            return res.status(500).send(Object.assign({ status: "error", message: "an error occurred" }, (!err.message ? {} : { error: err.message || err.toString() })));
    }
};
exports.errorHandler = errorHandler;
