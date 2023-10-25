"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateResource = (schema) => (req, res, next) => {
    // console.log(req.body);
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (e) {
        return res.status(422).send({
            status: "error",
            message: e.errors[0].message,
        });
    }
};
exports.default = validateResource;
