const chalk = require('chalk');
const server = require('../server');
const config = require('../config');

server.listen(config.server.port, (err) => {
  if (err) {
    console.log(chalk.red(err));
    return;
  }
  console.log(chalk.green(
    `Server is now running at http://127.0.0.1:${config.server.port}.`
  ));
});
