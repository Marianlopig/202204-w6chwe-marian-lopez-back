const mongoose = require("mongoose");
const robotSchema = require("./models/Robot");
const debug = require("debug")("robots:db");

mongoose.connect(process.env.MONGO_URI);
const robot = mongoose.model("robot", robotSchema);

module.exports = robot;
