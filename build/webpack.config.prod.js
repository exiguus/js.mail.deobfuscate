const path = require('path');

const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const dirApp = path.join(__dirname, '../src');

module.exports = merge(webpackConfig, {

  entry: {
    // vendor: [
    //   'lodash',
    // ],
    bundle: path.join(dirApp, 'js/mail.deobfuscate.module.js'),
  },

  devtool: 'source-map', // or 'eval'

  output: {
    // in the case of a "plain global browser library", this
    // will be used as the reference to our module that is
    // hung off of the window object.
    library: 'mailDeobfuscate',
    // We want webpack to build a UMD wrapper for our module
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // the destination file name
    filename: 'mail.deobfuscate.min.js',
  },

  optimization: {
    minimize: true,
  },
});
