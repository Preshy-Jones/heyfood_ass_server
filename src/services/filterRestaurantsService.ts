import mongoose from "mongoose";
import { FilterRestaurantInput } from "../validation/restaurant.schema";
import Restaurant from "../models/restaurant";

const filterRestaurantsServices = async (
  params: FilterRestaurantInput["params"]
) => {
  const ands = await makeFilterConditions(params);
  const match = { $and: ands };

  let pipeline = [];

  if (ands.length > 0) {
    pipeline.push({ $match: match });
  }
  let pipelinePayload = [
    {
      $lookup: {
        from: "tags",
        localField: "tags",
        foreignField: "_id",
        as: "tags",
      },
    },
    { $unwind: "$tags" },
  ];
  pipeline = [...pipeline, ...pipelinePayload];
  let restaurants: any = await Restaurant.aggregate(pipeline).allowDiskUse(
    true
  );
  let result = restaurants;
  return result;
};

const makeFilterConditions = async (
  params: FilterRestaurantInput["params"]
) => {
  const ands = [];

  if (params.search) {
    ands.push({
      title: {
        $regex: params.search,
        $options: "i",
      },
    });
  }
  if (params.tag) {
    ands.push({
      //check that tag is in tags array
      tags: {
        $in: [new mongoose.Types.ObjectId(params.tag)],
      },
    });
  }

  return ands;
};

export default filterRestaurantsServices;
