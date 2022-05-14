const chalk = require("chalk");

const debug = require("debug")("calculator:server-initializeServer");

const initializeServer = (port) => {
  app.listen(port, () => debug(`server listening on port ${port}`));

  server.on("error", (error) => {
    debug(chalk.red("Error on server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port} in use`));
    }
  });
};

initializeServer(4000);
