const express = require("express");
const cars = express.Router();
const Car = require("../models/Car");

/* This is a route handler. It is a function that handles requests to a specific route. */
// Fetch all cars
cars.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

/*Add Car*/
/* Creating a new car. */
cars.post("/", async (req, res) => {
  const car = new Car({
    car: req.body.car,
    model: req.body.model,
    color: req.body.color,
    year: req.body.year,
  });

  try {
    const newCar = await car.save();
    res.status(201).json({ newCar });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Delete car by model
cars.delete("/:id", async (req, res) => {
  try {
    await Car.deleteOne({ _id: req.params.id });
    return res.status(200).json(` ${req.body.model}is deleted`);
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
});

// update car by id
cars.put("/:id", async (req, res) => {
  try {
    await Car.findOneAndUpdate({ _id: req.params.id }, req.body);
    return res.status(200).json(` ${req.body.model} is Updated`);
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
});

/* Exporting the router object to the `index.js` file. */
module.exports = cars;
