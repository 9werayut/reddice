import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        filename: 'bundle.js',
        path: '/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    }
}