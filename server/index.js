const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const initializeServer = require("./initializeServer");
const { router: robotsRouter } = require("./routers/robotsRouter");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", robotsRouter);


initializeServer(app, process.env.SERVER_PORT || 4000);
