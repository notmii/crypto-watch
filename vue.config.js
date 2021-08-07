const path = require('path');

module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@consts': path.resolve(__dirname, 'src/consts'),
      }
    }
  }
};
