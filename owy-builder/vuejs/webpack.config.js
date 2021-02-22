module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        loader: 'url-loader?limit=100000'
        /*options: {
          outputPath: '',
        },*/
      }
      { test: /.(png|woff(2)?|eot|ttf|svg)(?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000' }
    ]
  },
  // plugin omitted
}
/*
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const environment = process.env.NODE_ENV || 'development'

module.exports = {
  entry: ['regenerator-runtime/runtime', './src/index'],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'plugin-editor.js',
    library: ['PluginEditor'],
    libraryTarget: 'umd'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}*/