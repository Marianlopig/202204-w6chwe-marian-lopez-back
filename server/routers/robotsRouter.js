const debug = require("debug")("robots:router");
const express = require("express");
const robot = require("../../db");
const router = express.Router();

router.get("/", getRobots);
router.delete("/delete/:idRobot", deleteRobot);

const getRobots = async (req, res) => {
  const robots = await robot.find();
  res.status(200).json(robots);
};

const deleteRobot = async (req, res) => {
  const { robotId } = req.params;
  await robot.deleteOne({ _id: robotId });
  res.status(200).json({ _id: robotId });
};

module.exports = { router, getRobots, deleteRobot };
