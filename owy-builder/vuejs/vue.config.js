var path = require('path')
var fs = require('fs')
var theme_path = '../../vuejs/'

module.exports = {
  /*configureWebpack: config => {
          config.output.filename = 'ittus.[name].js';

      },
      chainWebpack: config => {
        config.plugin('extract-css')
            .tap(([options, ...args]) => [
                Object.assign({}, options, { filename: 'css/ittus.[name].css' }),
                ...args
            ])
      }*/

  configureWebpack: {
    resolve: {
      alias: {
        //Theme paths
        Src: path.resolve(__dirname, theme_path + 'src'),
        Styles: path.resolve(__dirname, theme_path + 'src/styles'),
        Assets: path.resolve(__dirname, theme_path + 'src/assets'),
        Libs: path.resolve(__dirname, theme_path +'src/libs'),
        Store: path.resolve(__dirname, theme_path + 'src/store'),
        Components: path.resolve(__dirname, theme_path + 'src/components'),
        Headers: path.resolve(__dirname, theme_path + 'src/components/headers'),
        Atoms: path.resolve(__dirname, theme_path + 'src/components/atoms'),
        Molecules: path.resolve(__dirname, theme_path + 'src/components/molecules'),
        Organisms: path.resolve(__dirname, theme_path + 'src/components/organisms'),
        Templates: path.resolve(__dirname, theme_path + 'src/components/templates'),
        Pages: path.resolve(__dirname, theme_path + 'src/components/pages'),
        Game: path.resolve(__dirname, theme_path + 'src/phaser-games'),
        image: path.resolve(__dirname, theme_path + 'src/componets/images'),
        //Plugin paths
        PluginComponents: path.resolve(__dirname, 'src/components'),
        PluginLib: path.resolve(__dirname, 'src/libs'),
        PluginStore: path.resolve(__dirname, 'src/store'),
        //Plugin_libs: path.resolve(__dirname, theme_src + '/libs'),
      }
    },
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js"
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = -1
        return options
      });
      
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: "[name].css",
            chunkFilename: "[name].css"
          }
        ]);
    }
  },
  runtimeCompiler: true,
  devServer: { 
    https: false,
    port: 8081,
    disableHostCheck: true
  },
  transpileDependencies: ['ansi-regex'],

  publicPath: './'

}