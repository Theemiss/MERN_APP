const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const BodyParser = require("body-parser")
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(BodyParser.json());

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;

mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("db Connected"));

const UserView = require("./server/routers/profile")
app.use('/',UserView)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});