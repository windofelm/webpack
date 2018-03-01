const path = require('path');
let LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let reloadOptions = {};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
        new LiveReloadPlugin(reloadOptions),
        //new UglifyJSPlugin() // Minify and tree-shanking
    ]
};