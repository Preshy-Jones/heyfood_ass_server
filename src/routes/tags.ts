import express from "express";

import validateResource from "../middlewares/validateResource";
import { AddTagSchema } from "../validation/tag.schema";
import { addTag, getTags } from "../controllers/tagsController";

const router = express.Router();

router.get("/", getTags);

router.post("/", validateResource(AddTagSchema), addTag);

export default router;
