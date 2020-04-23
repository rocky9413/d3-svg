const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./webpack-utils/${env}`)(env);
const addPresets = require('./webpack-utils/addPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  const js = {
    test: /\.jsx?/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  };

  const ts = {
    test: /\.ts$/,
    use: 'ts-loader'
  };

  const serverConfig = {
    mode,
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false, // if you don't put this is, __dirname
      __filename: false // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    entry: {
      server: path.resolve(__dirname, './server/server.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    module: {
      rules: [js, ts]
    }
  };

  const clientConfig = webpackMerge(
    {
      mode,
      target: 'web',
      entry: {
        main: path.resolve(__dirname, './src/mainComponent/main.js'),
        svg: path.resolve(__dirname, './src/svg/svgSection.js')
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
      },
      devtool: 'source-map',
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [js, ts]
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    addPresets({ mode, presets })
  );
  return [serverConfig, clientConfig];
};
