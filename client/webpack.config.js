const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@login': path.resolve(__dirname, './src/components/login/'),
      '@header': path.resolve(__dirname, './src/components/header/'),
      '@breakdown': path.resolve(__dirname, './src/components/breakdown/'),
      '@statistic': path.resolve(__dirname, './src/components/statistic/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
  },
};
