const path = require('path');

const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirApp = path.join(__dirname, '../src');

module.exports = merge(webpackConfig, {

  devtool: '#inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(dirApp, 'index.html'),
    }),
  ],

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js',
  },

});
