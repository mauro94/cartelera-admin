const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                mode: 'production'
            }
        })
    ]
})