"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateResource_1 = __importDefault(require("../middlewares/validateResource"));
const tag_schema_1 = require("../validation/tag.schema");
const tagsController_1 = require("../controllers/tagsController");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("Hello Tags route!");
});
router.post("/", (0, validateResource_1.default)(tag_schema_1.AddTagSchema), tagsController_1.addTag);
exports.default = router;
