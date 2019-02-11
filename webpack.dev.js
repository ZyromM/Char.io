 const path = require('path');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

   module.exports = merge(common, {
     mode: 'development',
     devtool: 'inline-source-map',//'cheap-source-map'
     devServer: {
       contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'res')],
       disableHostCheck: true,
       host: '0.0.0.0',
       port: 9000
     }
 });