/**
 * Created by fengjj on 2017/5/26.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

const config = {
    entry:{
        vendors: './src/lib/index.js',
        bundle:'./src/app.js',
    },
    resolve:{
        extensions:['.ts','.js','.json'],
        modules:[path.join(__dirname,'src'),'node_modules']
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
                use:[{loader:"tslint-loader"},{loader:"ts-loader"},{loader:"awesome-typescript-loader"},{loader:"angular2-template-loader"}],
                exclude:[/\.(spec|e2e)\.ts$/]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{loader:'babel-loader',options:{
                    presets:['es2015'],
                    plugins:['syntax-dynamic-import']
                }}],

            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[{loader:'file-loader'}]
            },
            {
                test:/\.(woff|woff2|eot|ttf|svg)$/,
                use:[{loader:'url-loader',options: {limit: 100000}}]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({title:"My App",filename:'../index.html',inject:"head"}),
        new ExtractTextPlugin({ filename: '../assets/css/[chunkhash].css'}),
        new webpack.optimize.CommonsChunkPlugin({names:['vendors','manifest']})
    ]
}
module.exports = config;