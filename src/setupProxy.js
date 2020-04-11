const {createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    
    app.use(createProxyMiddleware ("/maps", {target: "https://maps.googleapis.com", changeOrigin: true}));
    app.use(createProxyMiddleware ("/maps", {target: "https://angjelonuho.github.io/Polis/", changeOrigin: true}));
    app.use(createProxyMiddleware ("/api.openweathermap.org",{ target: "http://", changeOrigin: true}));
    app.use(createProxyMiddleware ("/latest",{ target: "https://api.exchangeratesapi.io", changeOrigin: true}));
    
}; 