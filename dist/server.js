"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
// import compression from "compression";
// import cookieparser from "cookie-parser";
const errors_1 = require("./middlewares/errors");
const tags_1 = __importDefault(require("./routes/tags"));
const restaurant_1 = __importDefault(require("./routes/restaurant"));
const db_1 = __importDefault(require("./config/db"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions_1.default));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// app.use(compression());
// app.use(cookieparser());
app.get("/", (req, res) => {
    res.json({
        msg: "welcome to our api, have a blast...",
    });
});
app.use("/api/tags", tags_1.default);
app.use("/api/restaurant", restaurant_1.default);
app.use(errors_1.notFoundHandler);
app.use(errors_1.errorHandler);
(0, db_1.default)();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
