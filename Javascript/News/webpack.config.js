const path = require('path') //path모듈을 가지고 와 변수에 할당.
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'App.js',
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [{
          from: 'img'
        } //만들어놓은 폴더명 명시
      ]
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
}