const mongoose = require("mongoose");

const robotSchema = new mongoose.Schema({
  name: String,
});

module.exports = robotSchema;
