const webpack = require('webpack')
const {join} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = (env, API_URI) => ({
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URI: JSON.stringify(API_URI),
      },
    }),
    new webpack.ProgressPlugin(),
    new ImageminPlugin({
      disable: false,
      pngquant: {
        quality: '95-100',
      },
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './public/sw.js',
      swDest: 'service-worker.js',
    }),
  ],
  mode: env,
  devtool: env === 'development' ? 'source-map' : '',
  devServer: {
    contentBase: join(__dirname, '../dist'),
    historyApiFallback: true,
    open: true,
    hot: true,
    // proxy: {
    //   "/v1": "http://[::1]:5000"
    // }
  },
})
