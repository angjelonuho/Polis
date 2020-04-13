const {createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function(app) {
    app.use(
      '/maps/api/place',
      createProxyMiddleware({
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
      })
    );
  };