var webpack = require('webpack');
module.exports = {
    mode: "development",
    entry: "./src/Alerter.ts",
    output: {
        filename: "Alerter.js",
        libraryTarget: "umd",
        //library: "Contracts",
    },
    devtool: "source-map",
    resolve: {
        extensions: [ '.ts', '.tsx', ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: "ts-loader"
                }],
                exclude: '/node_modules/'
            },
        ]
    },
    stats: {
        assets: false,
        colors: true,
    }
};