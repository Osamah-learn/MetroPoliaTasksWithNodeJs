
/* This is importing the mongoose module. */
const mongoose = require("mongoose");
/* This is the syntax for creating a new mongoose Schema. */
const Schema  = mongoose.Schema;

/* This is creating a new Schema. */
const CarSchema = new Schema({
  brand: String,
  model: String,
  color: String,
  year: Number,
});

//Export model
module.exports = mongoose.model("Car", CarSchema);
