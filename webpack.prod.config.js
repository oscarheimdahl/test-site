const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('@types/webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
