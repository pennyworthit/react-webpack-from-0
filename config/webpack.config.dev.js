const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');

module.exports = {
  entry: path.join(rootPath, 'src/index.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(rootPath, 'build'),
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
  ],
};
