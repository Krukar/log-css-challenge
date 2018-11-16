const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  resolve:{
    alias: {
      SCSS: path.resolve('src/scss')
    },
    extensions: ['.js']
  },
  module: {
    rules:[
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./app.css'),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false,
      fix: false
    })
  ]
}
