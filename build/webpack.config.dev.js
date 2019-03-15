const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

  devtool: '#inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV,
    }),

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
