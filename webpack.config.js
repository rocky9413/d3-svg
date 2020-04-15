const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./webpack-utils/${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log('WP MODE ===> ', mode);
  return webpackMerge(
    {
      mode,
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
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
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/index.html'),
          filename: 'index.html'
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  );
};
