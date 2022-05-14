const debug = require("debug")("robots:router");
const express = require("express");
const robot = require("../../db");
const router = express.Router();

const getRobots = async (req, res) => {
  const robots = await robot.find();
  res.status(200).json(robots);
};
router.get("/", getRobots);
module.exports = { router, getRobots };
