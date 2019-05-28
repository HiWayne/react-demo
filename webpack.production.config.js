const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle-[hash].js'
  },
  mode: 'production',
  devtool: "none",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        },{
          loader: "postcss-loader"
        }]
      })
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: __dirname + '/public/temp.html'
    }),
    new ExtractTextPlugin("style.css"),
    new CleanWebpackPlugin({
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
}