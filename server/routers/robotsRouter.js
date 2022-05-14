const debug = require("debug")("robots:router");
const express = require("express");
const robot = require("../../db");
const router = express.Router();

router.get("/", async (req, res) => {
  const robots = await robot.find();
  debug("Getting the robots");
  res.status(200).json(robots);
});

module.exports = router;
