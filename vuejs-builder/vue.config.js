var path = require('path')
var fs = require('fs');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        Src: path.resolve(__dirname, 'src'),
        Styles: path.resolve(__dirname, 'src/styles'),
        Assets: path.resolve(__dirname, 'src/assets'),
        Libs: path.resolve(__dirname, 'src/libs'),
        Atoms: path.resolve(__dirname, 'src/components/atoms'),
        Molecules: path.resolve(__dirname, 'src/components/molecules'),
        Organisms: path.resolve(__dirname, 'src/components/organisms'),
        Templates: path.resolve(__dirname, 'src/components/templates'),
        Pages: path.resolve(__dirname, 'src/components/pages'),
        Game: path.resolve(__dirname, 'src/phaser-games'),
        image: path.resolve(__dirname, 'src/componets/images'),
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
    port: 8082
  },
  transpileDependencies: ['ansi-regex']
}