const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
  // mode: 'production',
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:7]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:7]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'An App',
      template: path.join(rootPath, 'public', 'index.html'),
      inject: true,
    }),
    new CleanWebpackPlugin(['build'], CleanWebpackPluginOptions),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
  ],
  devServer: {
    port: 8080,
    compress: true,
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    // open: true,
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
    ],
  },
};
