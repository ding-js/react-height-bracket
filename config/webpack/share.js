const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './example/index.tsx',
    output: {
        path: path.resolve('example'),
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: [
                    'node_modules'
                ],
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        useCache: true,
                        cacheDirectory: '.cache'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    devtool: 'source-map',
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example/index.pug',
            filename: 'index.html',
            hash: true
        })
    ]
}
