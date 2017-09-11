const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.ts$/, use: ["ts-loader"] }
        ],
    },
    stats: {
        errorDetails: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html', to: '[name].[ext]' },
            { from: './src/style.css', to: '[name].[ext]' }
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    }
};