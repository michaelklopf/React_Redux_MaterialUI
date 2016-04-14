/*jshint esversion: 6 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname, // current folder
  entry: {
    demo: './demo.js' // entry point
  },
  output: {
    path: path.resolve('./dist'), // save result in dist folder
    filename: 'demo.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
