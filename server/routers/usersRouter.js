const { userLogin } = require("../controllers/usersControllers");
const express = require("express");
const usersRouter = express.Router();

usersRouter.post("/login", userLogin);

module.exports = { usersRouter };
