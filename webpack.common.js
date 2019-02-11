 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
     entry: {
       app: './src/js/index.js'
     },
     output: {
       path: path.resolve(__dirname, "dist"),
       filename: "main.js",
     },
   plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
           title: 'Production'
     })
   ],
     performance: {
       hints: false,
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           use: {
             loader: "babel-loader",
             options: {
               presets: ["@babel/preset-env"]
             }
           }
         }
       ]
     }
 };