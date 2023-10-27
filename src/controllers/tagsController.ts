import { NextFunction, Request, Response } from "express";
import { AddTagInput } from "../validation/tag.schema";
import { successResponse } from "../utils";
import Tag from "../models/tags";
import { getTagsService } from "../services/getTagsService";

export const addTag = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title } = req.body as AddTagInput["body"];
    const newTag = new Tag({
      title,
    });
    newTag.save();
    return res.send(successResponse("tag added successfully", null));
  } catch (error) {
    next(error);
  }
};

export const getTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tags = await getTagsService();
    return res.send(successResponse("Tags retrieved successfully", tags));
  } catch (error) {
    next(error);
  }
};
