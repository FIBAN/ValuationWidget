var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    APP_DIR + '/app.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
