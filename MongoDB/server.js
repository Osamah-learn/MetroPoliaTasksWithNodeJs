const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routers/home")
const cars = require("./routers/cars.js");
const app = express();
app.use(bodyParser.json());
app.use("/",home);
app.use("/cars", cars);
require("dotenv/config");

//MongoDB connection
const mongoose = require("mongoose");
mongoose.connect(process.env.mongodb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
