const baseWebpackConfig = require('./webpack.config.base');

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
  },
});
