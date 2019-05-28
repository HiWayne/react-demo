const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    progress: true,
    hot: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },{
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]--[hash:base64:5]'
        }
      },{
        loader: 'postcss-loader'
      }]
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: __dirname + '/public/temp.html'
    })
  ]
}