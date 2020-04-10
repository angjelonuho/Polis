const {createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    
    app.use(createProxyMiddleware ("https://maps.googleapis.com/maps", {target: "https://angjelonuho.github.io/", changeOrigin: true}));
    app.use(createProxyMiddleware ("/api.openweathermap.org",{ target: "http://", changeOrigin: true}));
    app.use(createProxyMiddleware ("/latest",{ target: "https://api.exchangeratesapi.io", changeOrigin: true}));
    
}; 