const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                mode: 'development'
            }
        }
        )],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src/public',
        historyApiFallback: true,
        host: '0.0.0.0',
        disableHostCheck: true
    }
})