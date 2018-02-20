const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var reloadOptions = {};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        library: 'MyLibrary',
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
        new LiveReloadPlugin(reloadOptions)
    ]
};