const webpack = require('webpack')
const {join} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = (env, API_URI) => ({
  mode: env,
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: join(__dirname, '..'),
      exclude: [],
      verbose: true,
      dry: false,
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URI: JSON.stringify(API_URI),
      },
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
      shorthands: false,
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100',
      },
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_size.html',
    }),
    // new WorkboxPlugin.InjectManifest({
    //   swSrc: './public/sw.js',
    //   swDest: 'sw.js',
    // }),
    new webpack.ProgressPlugin(),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxSize: 0,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 8,
          mangle: true,
        },
        sourceMap: false,
      }),
    ],
  },
})
