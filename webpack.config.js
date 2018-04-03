const path = require('path')

const config = {
    entry: {
        gtm: path.join(__dirname, 'src', 'gtm.js'),
        iframe: path.join(__dirname, 'src', 'iframe.js'),
    },
    output: {
        filename: '[name].js',
        path: __dirname,
    },
    devtool: '#sourcemap',
    mode: process.env.ENV || 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2'],
                        comments: false,
                    },
                },
            },
        ],
    },
}

module.exports = config
