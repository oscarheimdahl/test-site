const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('@types/webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
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
  devServer: {},
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
