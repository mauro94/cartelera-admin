var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/public');

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./src/app/config/index.js"
    ],

    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },

    devtool: "source-map-inline",
    devServer: {
        contentBase: './src/public',
        hot: true,
        historyApiFallback: true
    },

    resolve: {
        modules: [__dirname, './node_modules'],
        alias: {
            Style: 'src/app/style',
            Config: 'src/app/config/',
            Logic: 'src/app/logic/',
            Containers: 'src/app/components/containers/',
            Presentational: 'src/app/components/presentational/',
            Images: 'src/app/images/'
        },
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Cartelera - Admin',
            chunksSortMode: 'dependency',
            template: path.resolve('src/app/config/index.ejs')
        }),
    ],

    module: {
        rules: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        },
        {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|jp(e*)g)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'src/app/images/[hash]-[name].[ext]'
                }
            }]
        }
        ]
    }
};
