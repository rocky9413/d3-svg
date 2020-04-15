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
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
