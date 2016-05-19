const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./index.js');

const NODE_ENV = config.env;
const DEVELOPMENT = NODE_ENV === 'development';
const PRODUCTION = NODE_ENV === 'production';

const webpackConfig = {
  devtool: config.webpack.devtool,
  entry: [
    config.paths.entryFile,
  ],
  output: {
    path: config.paths.dist,
    filename: 'bundle.js',
    publicPath: config.webpack.output.publicPath,
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.env),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: config.paths.client,
      },
      {
        test: /\.(css)(\?.+)$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        exclude: /node_modules/,
      },
    ],
  },
};

if (DEVELOPMENT) {
  webpackConfig.entry.push('webpack-hot-middleware/client');

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (PRODUCTION) {
  webpackConfig.plugins.push(
    // OccurrenceOrderPlugin is needed for long-term caching to work properly.
    // See http://mxs.is/googmv
    new webpack.optimize.OccurenceOrderPlugin(),
    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin()
  );
}

module.exports = webpackConfig;
