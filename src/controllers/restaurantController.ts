import { NextFunction, Request, Response } from "express";
import Restaurant from "../models/restaurant";
import { successResponse } from "../utils";
import { FilterRestaurantInput } from "../validation/restaurant.schema";
import { FilterRestaurantService } from "../services";

export const getRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const restaurants = await Restaurant.find({});
    return res.send(
      successResponse("Restaurants retrieved successfully", restaurants)
    );
  } catch (error) {
    next(error);
  }
};

export const filterRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.query as FilterRestaurantInput["params"];
    const restaurants = await FilterRestaurantService(params);

    return res.send(
      successResponse("Restaurants retrieved successfully", restaurants)
    );
  } catch (error) {
    next(error);
  }
};
