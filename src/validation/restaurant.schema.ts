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

const filterRestaurantPayload = {
  body: object({
    tag: string({
      invalid_type_error: "Tag must be a string",
    }).optional(),
    search: string({
      invalid_type_error: "Search must be a string",
    }),
  }),
};

export const FilterRestaurantSchema = object({
  ...filterRestaurantPayload,
});

export type FilterRestaurantInput = TypeOf<typeof FilterRestaurantSchema>;
