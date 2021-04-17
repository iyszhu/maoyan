const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
        .set('@', path.join(__dirname, './src'))
  },
  devServer: {
    proxy: {
      '/mmdb': {
        target: 'http://wx.maoyan.com',
        changeOrigin: true
      },
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
      // '/api': {
      //   target: 'http:localhost:9090',
      //   changeOrigin: true,
      //   // pathRewrite: {
      //   //   '^/api': ''
      //   // }
      // }
    }
  }
}
