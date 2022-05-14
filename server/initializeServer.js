const chalk = require("chalk");
const debug = require("debug")("robots:server-initializeServer");

const initializeServer = (app, port) => {
  const server = app.listen(port, () =>
    debug(`server listening on port ${port}`)
  );

  server.on("error", (error) => {
    debug(chalk.red("Error on server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port} in use`));
    }
  });
};

module.exports = initializeServer;
