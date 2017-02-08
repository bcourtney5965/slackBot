var webpack = require('webpack');
module.exports = {
  entry: [
    './client/app/index.js'
  ],
  output: {
    path: __dirname + '/client/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js?$/, loaders: ['react-hot', 'babel-loader?'  + JSON.stringify({presets: ["es2015", "react"]})] , exclude: /node_modules/},
      {test: /\css?$/, loader: 'style!css'}
    ]
  },
  plugins: [
    // new webpack.NoErrorsPlugin()
  ]

};