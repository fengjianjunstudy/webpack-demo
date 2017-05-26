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
        filename: 'js/[name].[chunkhash].js',
        publicPath: publicPath,
        sourceMapFilename: 'js/[name].[chunkhash].map'
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
let conf = WebpackMerge(CommonConfig,CONFIG)
//module .exports = function(env){
//    return WebpackMerge(CommonConfig,CONFIG)
//}
module.exports = conf;