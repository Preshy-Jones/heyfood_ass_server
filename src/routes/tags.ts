import express from "express";

import validateResource from "../middlewares/validateResource";
import { AddTagSchema } from "../validation/tag.schema";
import { addTag } from "../controllers/tagsController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Tags route!");
});

router.post("/", validateResource(AddTagSchema), addTag);

export default router;
