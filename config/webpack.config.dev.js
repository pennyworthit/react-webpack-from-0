const path = require('path');

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');

module.exports = {
  entry: path.join(rootPath, 'src/app.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(rootPath, 'build'),
    publicPath,
  },
  mode: 'development',
};
