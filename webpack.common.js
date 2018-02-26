const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
   filename: '[name].[contenthash].css',
   disable: process.env.NODE_ENV === 'development'
});

const paths = {
   SRC: path.resolve(__dirname, 'src'),
   DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
   entry: path.join(paths.SRC, 'index.js'),
   output: {
      path: paths.DIST,
      filename: 'index.bundle.js',
      publicPath: '/'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
         },
         {
            test: /\.(s*)css$/,
            use: extractSass.extract({
               fallback: 'style-loader',
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        minimize: true
                     }
                  },
                  { loader: 'sass-loader' }
               ]
            })
         },
         { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' }
      ]
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
         template: 'public/index.html',
         minify: {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true
         }
      }),
      extractSass
   ]
};
