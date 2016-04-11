const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const serveFavicon = require('serve-favicon');
const chalk = require('chalk');
const history = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const config = require('../config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(serveFavicon(`${config.paths.static}/assets/favicon.png`));

if (process.env.NODE_ENV === 'production') {
  app.use(serveStatic(config.paths.static));
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
  res.sendFile(config.paths.htmlFile);
});

module.exports = app;
