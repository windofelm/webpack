const path = require('path');
const webpack = require("webpack");
let LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let reloadOptions = {};

module.exports = {
    entry: {
        "bundle": "./src/main.js",
        "bundle.min": "./src/main.js",
    },
    output: {
        filename: "[name].js",
        library: 'MyLibrary',
        libraryTarget: "umd", // universal module definition
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: ['es2015']
              }
          }
        }
      ]
    },
    plugins: [
        new LiveReloadPlugin(reloadOptions), // when webpack --watch
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};