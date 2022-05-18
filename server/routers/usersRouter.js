const { userLogin, userRegister } = require("../controllers/usersControllers");
const express = require("express");
const usersRouter = express.Router();

usersRouter.post("/login", userLogin);
usersRouter.post("/register", userRegister);

module.exports = { usersRouter };
