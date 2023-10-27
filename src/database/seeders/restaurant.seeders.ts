const mongoose = require("mongoose");
const Restaurant = require("../../models/restaurant.ts");
const Tag = require("../../models/tags.ts");
const SectionTag = require("../../models/sectionTag.ts");
require("dotenv").config();

// connect to mongo db
const mongoUri = process.env.MONGO_URI;
const connect = async () => {
  mongoose.connect(mongoUri, { keepAlive: true });
  mongoose.connection.on("error", (error) => {
    console.log(error);
    throw new Error(`unable to connect to database: ${mongoUri}`);
  });
};
// End mongo DB connection
const closeConnection = function () {
  return new Promise((resolve) => {
    mongoose.connection.close();
  });
};

// Drop tables
const drop = {
  // List the models to drop
  async Restaurants() {
    return Restaurant.deleteMany({});
  },
};

const seed = {
  // Product seeder
  async Restaurants() {
    //save tags
    const tags = await Tag.find({});
    const sectionTags = await SectionTag.find({});
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    const randomSectionTag =
      sectionTags[Math.floor(Math.random() * sectionTags.length)];

    const restaurantPayload = [];
    for (let i = 0; i < 120; i++) {
      const restaurant = {
        
      }
    }

    // console.log(shops);
  },
};
// node action
const run = async function () {
  // Start Connection
  await connect();
  // List models to drop
  await drop.Restaurants();

  // List models to seed
  await seed.Restaurants();

  // End Connection
  await closeConnection();
  console.log("successfully seeded data");
};
// run seeder
run();
