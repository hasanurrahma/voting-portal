const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const numberCounterSchema = new Schema({
  _id: String,
  year: Number,
  category: String,
  currentNumber: Number,
});

const NumberCounter = mongoose.model("NumberCounter", numberCounterSchema);

module.exports = NumberCounter;
