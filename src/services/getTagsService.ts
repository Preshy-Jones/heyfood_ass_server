import Tag from "../models/tags";

export const getTagsService = async () => {
  const tags = await Tag.find();
  return tags;
};
