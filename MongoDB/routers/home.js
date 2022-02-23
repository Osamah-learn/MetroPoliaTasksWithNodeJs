const express = require("express");
const home = express.Router();
const Car = require("../models/Car");

/* This is a route handler. It is a function that handles requests to a specific route. */
// Fetch all cars

home.get("/", function (req, res) {
  res.send("Copytright 2022 Osamah Amer");
});
/* Exporting the router object to the `index.js` file. */
module.exports = home;
