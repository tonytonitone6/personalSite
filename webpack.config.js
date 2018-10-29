const { join } = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackMerge = require('webpack-merge');

const { ImageminWebpackPlugin } = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const plugins = [imageminGifsicle()];

const modeConfig = (env) => require(`./webpack.utils/webpack.${env}`)(env);

module.exports = ({ mode }) => webpackMerge(
    {
      entry: './src/index.js',
      output: {
        path: join(__dirname, "dist"),
        publicPath: "/",
        filename: "[chunkhash].js"
      },
      module: {
        rules: [
          {
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
          },
          {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader", "postcss-loader", "sass-loader"]
            })
          },
          {
            test: /\.(svg|png|jpe?g)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "image/[hash:8].[name].[ext]"
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(["dist"]),
        new ExtractTextPlugin({
          filename: "css/style.css",
          allChunks: true
        }),
        new HtmlWebpackPlugin({
          template: "./index.html",
          favicon: "./favicon.ico"
        }),
        new webpack.ProgressPlugin(),
        new ImageminWebpackPlugin({
          imageminOptions: {
            plugins
          }
        })
      ]
    },
    modeConfig(mode)
  )
 
