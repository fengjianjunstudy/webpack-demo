/**
 * Created by fengjj on 2017/5/26.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

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
                test:/\.html$/,
                use:[{loader:"html-loader"}]
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
        new HtmlWebpackPlugin({title:"My App1",filename:'index.html',template:'src/index.ejs',inject:"head",chunksSortMode:"dependency"}),
        new ExtractTextPlugin({ filename: 'assets/css/[chunkhash].css'}),
        new webpack.optimize.CommonsChunkPlugin({names:['vendors','manifest'],minChunks: Infinity,}),
        new AssetsPlugin({filename:'assets.json'}),
        new WebpackChunkHash(),
        new webpack.HashedModuleIdsPlugin(),
        new ChunkManifestPlugin({
            filename: "assets.json",
            manifestVariable: "webpackManifest",
            inlineManifest: false
        })
    ]
}
module.exports = config;