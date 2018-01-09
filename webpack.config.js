const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var reloadOptions = {};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
        }
      ]
    },
    plugins: [
        new LiveReloadPlugin(reloadOptions)
    ]
};