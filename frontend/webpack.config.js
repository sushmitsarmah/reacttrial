var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var DEST_DIR = path.resolve(__dirname, 'dest');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.jsx',
    output: {
        path: DEST_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: SRC_DIR + '/index.html'
        })
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, include: SRC_DIR+'/app', loader: 'babel-loader'}
        ]
    }
};

module.exports = config;
