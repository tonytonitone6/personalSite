const {join} = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default
const styledComponentsTransformer = createStyledComponentsTransformer()

const webpackMerge = require('webpack-merge')

const modeConfig = (env, API_URI) =>
  require(`./webpack.utils/webpack.${env}`)(env, API_URI)

const srcPath = dir => {
  return join(__dirname, 'src', dir)
}

module.exports = ({mode, API_URI}) =>
  webpackMerge(
    {
      entry: ['react-hot-loader/patch', './src/index.tsx'],
      output: {
        path: join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[hash].js',
        chunkFilename: "[name].chunk.[chunkhash:8].js",
        globalObject: 'this'
      },
      module: {
        rules: [
          {
            loader: 'ts-loader',
            test: /\.tsx?$/,
            exclude: /node_modules/,
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
          {
            test: /\.worker\.tsx?$/,
            use: {
              loader: 'worker-loader',
              options: {
                // name: '[name]:[hash:8]'
                inline: true,
              }
            }
          },
          {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader'],
            }),
          },
          {
            test: /\.(svg|png|jpe?g)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]',
                },
              },
            ],
          },
        ],
      },
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
          '@locales': srcPath('locales'),
          '@components': srcPath('components'),
          '@containers': srcPath('containers'),
          '@utils': srcPath('utils'),
          '@assets': srcPath('assets'),
          '@context': srcPath('context'),
          '@reducers': srcPath('reducers'),
          '@hooks': srcPath('hooks'),
          '@schemas': srcPath('schemas'),
          '@styles': srcPath('styles'),
        },
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
    modeConfig(mode, API_URI),
  )
