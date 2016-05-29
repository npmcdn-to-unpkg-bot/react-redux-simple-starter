const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./index.js');
const debug = require('debug')('app:config:webpack');

const NODE_ENV = config.env;
const DEVELOPMENT = NODE_ENV === 'development';
const PRODUCTION = NODE_ENV === 'production';

debug('Creating webpack configuration.');
const webpackConfig = {
  devtool: config.webpack.devtool,
  module: {},
};

// --------------------------------------
// Entry
// --------------------------------------
webpackConfig.entry = [
  config.paths.entryFile,
];

if (DEVELOPMENT) {
  webpackConfig.entry.push('webpack-hot-middleware/client');
}

// --------------------------------------
// Bundle output
// --------------------------------------
webpackConfig.output = {
  path: config.paths.dist,
  filename: '[name].[hash].js',
  publicPath: config.webpack.output.publicPath,
};

// --------------------------------------
// Plugins
// --------------------------------------
webpackConfig.plugins = [
  new ExtractTextPlugin('styles.css'),
  // DefinePlugin is needed to expose any variables to webpack, and thus to be
  // able to access them in your application.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(config.env),
      API_URL: JSON.stringify(config.apiUrl),
    },
  }),
  // Generate index.html with the correct hashed filenames
  new HtmlWebpackPlugin({
    template: config.paths.htmlTemplate,
    filename: 'index.html',
    favicon: config.paths.favicon,
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
  }),
];

if (DEVELOPMENT) {
  debug('Enabling webpack plugins for development.');
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (PRODUCTION) {
  debug('Enabling webpack plugins for production.');
  webpackConfig.plugins.push(
    // OccurrenceOrderPlugin is needed for long-term caching to work properly.
    // See http://mxs.is/googmv
    new webpack.optimize.OccurenceOrderPlugin(),
    // Minify and optimize the JavaScript.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        /* eslint-disable */
        dead_code: true,
        /* eslint-enable */
        warnings: false,
      },
    }),
    // Merge all duplicate modules.
    new webpack.optimize.DedupePlugin()
  );
}

// --------------------------------------
// JavaScript loaders
// --------------------------------------
webpackConfig.module.loaders = [
  {
    test: /\.js$/,
    loader: ['babel'],
    include: config.paths.src,
    query: {
      cacheDirectory: true,
      presets: ['react', 'es2015', 'stage-0'],
    },
    env: {
      development: {
        presets: ['react-hmre'],
      },
      production: {
        presets: ['react-optimize'],
      },
    },
  },
];

// --------------------------------------
// Style loaders
// --------------------------------------
webpackConfig.module.loaders.push({
  test: /\.(css)(\?.+)$/,
  loader: ExtractTextPlugin.extract('style', 'css'),
  exclude: /node_modules/,
});

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!sass'),
  exclude: /node_modules/,
});

// --------------------------------------
// File loaders
// --------------------------------------
webpackConfig.module.loaders.push({
  test: /\.(jpg|png|mp3)$/,
  loader: 'url?limit=25000',
  include: config.paths.static,
});

module.exports = webpackConfig;
