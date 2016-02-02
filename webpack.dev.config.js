var webpack = require('webpack');

module.exports = {
  debug: true,
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: "number-notations.js",
    library: "number-notations",
    libraryTarget: "umd"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
