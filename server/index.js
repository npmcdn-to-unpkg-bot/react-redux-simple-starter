const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const config = require('../config');

const staticPath = path.resolve(__dirname, '../static');

const app = express();
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === 'production') {
  app.use(serveStatic(staticPath));
}

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
