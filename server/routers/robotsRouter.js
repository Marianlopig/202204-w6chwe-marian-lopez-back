const debug = require("debug")("robots:router");
const express = require("express");
const robot = require("../../db");
const router = express.Router();

const getRobots = async (req, res) => {
  const robots = await robot.find();
  res.status(200).json(robots);
};

const deleteRobot = async (req, res) => {
  const { idRobot } = req.params;
  await robot.deleteOne({ _id: idRobot });
  res.status(200).json({ _id: idRobot });
};

router.get("/", getRobots);
router.delete("/delete/:idRobot", deleteRobot);

module.exports = { router, getRobots, deleteRobot };
