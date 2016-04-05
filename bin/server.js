const chalk = require('chalk');
const server = require('../server');

const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  if (err) {
    console.log(chalk.red(err));
    return;
  }
  console.log(chalk.green(
    `Server is now running at http://127.0.0.1:${port}.`
  ));
});