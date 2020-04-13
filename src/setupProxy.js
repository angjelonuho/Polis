const {createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function(app) {
    app.use(
      '/maps', createProxyMiddleware({
      pathRewrite: {
        '^/maps/': '/'
      },
      target: 'https://angjelonuho.github.io/Polis/',
      secure: false
        
      })
    );
  };
  