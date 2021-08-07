const path = require('path');

module.exports = {
  publicPath: "/crypto-watch/",
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@consts': path.resolve(__dirname, 'src/consts'),
      }
    }
  }
};
