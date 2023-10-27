const mongoose = require("mongoose");
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
  async SectionTags() {
    return SectionTag.deleteMany({});
  },
};

const seed = {
  // Product seeder
  async SectionTags() {
    //save tags
    await SectionTag.insertMany(sectionTags);

    // console.log(shops);
  },
};
// node action
const run = async function () {
  // Start Connection
  await connect();
  // List models to drop
  await drop.SectionTags();

  // List models to seed
  await seed.SectionTags();

  // End Connection
  await closeConnection();
  console.log("successfully seeded data");
};
// run seeder
run();

const sectionTags = [
  {
    title: "Special offers for you",
  },
  {
    title: "National Favorites",
  },
  {
    title: "Now on heyfood",
  },
];
