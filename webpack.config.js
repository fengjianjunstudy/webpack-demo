const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpackMerge = require("webpack-merge")
const webpack = require('webpack')

const config = {
    entry:{
        vendors: './src/lib/index.js',
        bundle:'./src/app.js',

    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist'),
        sourceMapFilename:'[file].map'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[{loader:"style-loader"},{loader:"css-loader"}],
                use: ExtractTextPlugin.extract({use: 'css-loader' })
            },
            {
                test:/\.ts$/,
                use:[{loader:"tslint-loader"},{loader:"ts-loader"}],
                exclude:[/\.(spec|e2e)\.ts$/]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({title:"My App",filename:path.resolve(__dirname,"src","index.html"),inject:"head"}),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({names:['vendors','manifest']})

    ]
}
module.exports = config;