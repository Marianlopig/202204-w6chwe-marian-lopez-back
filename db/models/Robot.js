const mongoose = require("mongoose");

const robotSchema = new mongoose.Schema({
  name: String,
  image: String,
  speed: Number,
  toughness: Number,
  creationDate: Date,
});

module.exports = robotSchema;
