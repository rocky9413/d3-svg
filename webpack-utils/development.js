const path = require('path');

module.exports = () => ({
  devServer: {
    publicPath: '/',
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    port: 8080,
    proxy: {
      context: () => true,
      target: 'http://localhost:3000'
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
