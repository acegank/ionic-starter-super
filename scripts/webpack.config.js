var path = require('path')
var tsconfig = require('../tsconfig.json')
var webpackConfig = require('@ionic/app-scripts/config/webpack.config');

const {
  TsConfigPathsPlugin
} = require('awesome-typescript-loader');

webpackConfig.dev.resolve = webpackConfig.prod.resolve = {
  extensions: ['.ts', '.js', '.json'],
  modules: [path.resolve('node_modules')],
  plugins: [
    new TsConfigPathsPlugin( /* { configFileName, compiler } */ )
  ]
}

module.exports = webpackConfig
