/**
 * Created by fengjj on 2017/5/26.
 */
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js')
const path = require('path');
const CONFIG = {
    devtool:'cheap-module-source-map',
    output: {
        path: path.join(__dirname,'../dist'),
        filename: 'assets/js/[name].js',
        sourceMapFilename: 'js/[name].map'
    },
    devServer: {
        port: 8686,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        contentBase:path.join(__dirname,'../src'),
        publicPath:'/',
        compress:true,
        clientLogLevel: "none",
        watchContentBase:true,
        watchOptions: {
            poll: true
        }
    }
}
let conf = WebpackMerge(CommonConfig,CONFIG)

module.exports = conf;