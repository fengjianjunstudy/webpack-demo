/**
 * Created by fengjj on 2017/5/26.
 */
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js')
const path = require('path');
const  publicPath = '../dist/assets/';
const CONFIG = {
    devtool:'cheap-module-source-map',
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },
    devServer: {
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath
    }
}
module .exports = function(env){
    return WebpackMerge(CommonConfig,CONFIG)
}