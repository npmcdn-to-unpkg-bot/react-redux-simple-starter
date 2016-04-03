const path = require('path');
const chalk = require('chalk');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.dev');

const app = express();
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  console.log(chalk.blue(
    'Webpack HMR and dev middleware are enabled.'
  ));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
