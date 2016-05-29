const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const config = require('./index.js');
const debug = require('debug')('app:config:webpack');

const DEVELOPMENT = config.globals.__DEV__;
const PRODUCTION = config.globals.__PROD__;

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
  // able to access them in the application code.
  new webpack.DefinePlugin(config.globals),
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
// css, css-modules, postcss
webpackConfig.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
  exclude: /node_modules/,
});

// sass, css-modules, postcss
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?outputStyle=expanded&sourceMap!postcss-loader'),
  exclude: /node_modules/,
});

webpackConfig.postcss = [ autoprefixer({ browsers: ['last 2 versions'] }) ];

// --------------------------------------
// File loaders
// --------------------------------------
webpackConfig.module.loaders.push({
  test: /\.(jpg|png|mp3)$/,
  loader: 'url?limit=25000',
  include: config.paths.static,
});

module.exports = webpackConfig;
