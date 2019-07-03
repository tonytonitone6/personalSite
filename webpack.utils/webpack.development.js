const webpack = require("webpack");
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.exports = (env, API_URI) => ({
  plugins: [
    new ExtractTextPlugin({
      filename: "css/styles.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        API_URI: JSON.stringify(API_URI)
      }
    }),
    new webpack.ProgressPlugin(),
    new ImageminPlugin({
      disable: false,
      pngquant: {
        quality: '95-100'
      }
    })
    // new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
  ],
  mode: env,
  devtool: env === "development" ? "source-map" : "",
  devServer: {
    contentBase: join(__dirname, "../dist"),
    historyApiFallback: true,
    open: true
    // proxy: {
    //   "/v1": "http://[::1]:5000"
    // }
  }
});