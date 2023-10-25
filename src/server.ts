import "dotenv/config";
import express from "express";
// import compression from "compression";
// import cookieparser from "cookie-parser";
import { errorHandler, notFoundHandler } from "./middlewares/errors";
import validateResource from "./middlewares/validateResource";
import tagsRoute from "./routes/tags";
import restaurantRoute from "./routes/restaurant";
import connectDB from "./config/db";
import corsOptions from "./config/corsOptions";
import cors from "cors";

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(compression());
// app.use(cookieparser());

app.get("/", (req: Request, res: any) => {
  res.json({
    msg: "welcome to our api, have a blast...",
  });
});

app.use("/api/tags", tagsRoute);
app.use("/api/restaurant", restaurantRoute);

app.use(notFoundHandler);
app.use(errorHandler);

connectDB();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
