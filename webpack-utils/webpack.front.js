const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./webpack-utils/${env}`)(env);
const addPresets = require('./addPresets');

// "dev-f": "webpack-dev-server --env.mode development --config webpack.front.js"
// "dev-b": "webpack-dev-server --env.mode development --config webpack.back.js"

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  // console.log('WP MODE ===> ', mode, ' --- Presets ===>', presets);
  return webpackMerge(
    {
      mode,
      entry: {
        main: path.resolve(__dirname, './src/mainComponent/main.js'),
        svg: path.resolve(__dirname, './src/svg/svgSection.js')
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
      },
      target: 'web',
      devtool: 'source-map',
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.ts$/,
            use: 'ts-loader'
          }
        ]
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },
      plugins: [
        // new HtmlWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //   template: path.resolve(__dirname, './src/index.html'),
        //   filename: 'index.html'
        // }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    addPresets({ mode, presets })
  );
};
