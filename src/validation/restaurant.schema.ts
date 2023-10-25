import { object, string, TypeOf, z } from "zod";

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
  }),
};

export const AddRestaurantSchema = object({
  ...payload,
});

export type AddRestaurantInput = TypeOf<typeof AddRestaurantSchema>;
