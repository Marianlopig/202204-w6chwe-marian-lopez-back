const { program } = require("commander");
const debug = require("debug")("robots:cliIndex");

program.option("-p, --port <port>", "Port for the API");
program.parse();

const { port } = program.opts();

module.exports = { port };
