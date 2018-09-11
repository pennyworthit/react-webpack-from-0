const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');

const buildPath = path.join(rootPath, 'build');

// CleanWebpackPlugin
const CleanWebpackPluginOptions = {
  root: rootPath,
  verbose: true, // 输出信息到控制台
};

module.exports = {
  entry: path.join(rootPath, 'src/index.js'),
  output: {
    filename: '[name].[hash].js',
    path: buildPath,
    // publicPath,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
        exclude: [
          path.join(rootPath, 'node_modules'),
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'An App',
      template: path.join(rootPath, 'public', 'index.html'),
      inject: true,
    }),
    new CleanWebpackPlugin(['build'], CleanWebpackPluginOptions),
  ],
};
