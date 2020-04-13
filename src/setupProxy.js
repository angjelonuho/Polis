const {createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function(app) {
    app.use(
      '/maps',
      createProxyMiddleware({
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {
          '^/maps': 'https://maps.googleapis.com/maps'
        },
        
      })
    );
  };
  