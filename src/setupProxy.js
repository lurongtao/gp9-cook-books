const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/xapi/api', { 
      target: 'http://localhost:9000/',
      changeOrigin: true,
      pathRewrite: {
        '^/xapi/api': ''
      }
    })
  )
}