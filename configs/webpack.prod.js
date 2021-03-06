/**
 * Created by fengjj on 2017/5/26.
 */
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js')
const path = require('path');
const webpack = require('webpack')
const CONFIG = {
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'assets/js/[name].[chunkhash].js',
        sourceMapFilename: 'assets/js/[name].map'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
}
module.exports = function(env){
    return WebpackMerge(CommonConfig,CONFIG);
}