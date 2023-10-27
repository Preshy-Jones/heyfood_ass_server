import { NextFunction, Request, Response } from "express";

export const getRestaurants = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
  } catch (error) {
    next(error);
  }
};
