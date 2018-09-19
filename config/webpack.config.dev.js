const baseWebpackConfig = require('./webpack.config.base');

const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    // open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
