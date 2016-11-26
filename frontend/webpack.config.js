var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            d3: "d3",
            "_": "lodash"
        }),
        new ExtractTextPlugin("styles.css")      
    ],
    module: {
        loaders: [
            {   test: /\.(jsx|js)$/, 
                include: SRC_DIR+'/app', 
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {   test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },            
            {   test: /\.styl$/,
                loader: ExtractTextPlugin.extract("stylus-loader", "css-loader")
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl','.css']
    }      
};

module.exports = config;
