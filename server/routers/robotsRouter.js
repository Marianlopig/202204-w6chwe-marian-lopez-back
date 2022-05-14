const debug = require("debug")("robots:router");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const robots = [];
  debug("Getting the robots");
  res.status(200).json(robots);
});

module.exports = router;
