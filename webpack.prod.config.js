const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('@types/webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {},
  plugins: [new HtmlWebpackPlugin()],
};
