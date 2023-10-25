import { object, string, TypeOf, z } from "zod";

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
  }),
};

export const AddTagSchema = object({
  ...payload,
});

export type AddTagInput = TypeOf<typeof AddTagSchema>;
