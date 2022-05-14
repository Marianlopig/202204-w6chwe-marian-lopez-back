const express = require("express");
const morgan = require("morgan");

const initializeServer = require("./initializeServer");
const robotsRouter = require("./routers/robotsRouter");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", robotsRouter);

initializeServer(app, process.env.PORT || 4000);
