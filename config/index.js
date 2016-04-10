const path = require('path');
const merge = require('lodash/merge');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const CLIENT_DIR = 'src';
const DIST_DIR = 'static/dist';
const SERVER_DIR = 'server';
const STATIC_DIR = 'static';

const config = {
  env: NODE_ENV,

  paths: {
    root: PROJECT_ROOT,
    client: path.resolve(PROJECT_ROOT, CLIENT_DIR),
    dist: path.resolve(PROJECT_ROOT, DIST_DIR),
    server: path.resolve(PROJECT_ROOT, SERVER_DIR),
    static: path.resolve(PROJECT_ROOT, STATIC_DIR),
    entryFile: path.resolve(PROJECT_ROOT, CLIENT_DIR, 'index.js'),
    htmlFile: path.resolve(PROJECT_ROOT, CLIENT_DIR, 'index.html'),
  },

  server: {
    hostname: 'localhost',
    port: process.env.PORT || 3000,
  },

  webpack: {
    output: {
      publicPath: '/dist',
    },
  },
};

module.exports = merge({}, config, require(`./environments/${NODE_ENV}`));
