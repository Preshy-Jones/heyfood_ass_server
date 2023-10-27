import express from "express";

import validateResource from "../middlewares/validateResource";
import {
  filterRestaurants,
  getRestaurants,
} from "../controllers/restaurantController";
import { FilterRestaurantSchema } from "../validation/restaurant.schema";
import { getTags } from "../controllers/tagsController";

const router = express.Router();

router.get(
  "/filter",
  // validateResource(FilterRestaurantSchema),
  filterRestaurants
);
router.get("/", getRestaurants);

export default router;
