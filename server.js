const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(cors());

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db Connected"));

const UserView = require("./server/routers/profile");
app.use("/", UserView);

app.post("/user/login", (req, res) => {
  res.json("Hello");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
