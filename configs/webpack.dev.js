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
        path: path.join(__dirname, '../dist/assets'),
        filename: 'js/[name].js',
        publicPath: publicPath,
        sourceMapFilename: 'js/[name].map'
    },
    devServer: {
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase:path.join(__dirname,'../src'),
        compress:true,
        clientLogLevel: "none",
        watchContentBase:true,
        watchOptions: {
            poll: true
        }
    }
}
let conf = WebpackMerge(CommonConfig,CONFIG)
//module .exports = function(env){
//    return WebpackMerge(CommonConfig,CONFIG)
//}
console.log('devlop')
module.exports = conf;