const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new HtmlWebpackPlugin({
    title: "Maker || Pre-launch page",
    template: './src/template.html'
  })]
});