import { createProxyMiddleware } from "http-proxy-middleware";

export default function(app){
    app.use(createProxyMiddleware ("/maps", {target: "https://maps.googleapis.com", changeOrigin: true}));
    app.use(createProxyMiddleware ("/api.openweathermap.org",{ target: "http://", changeOrigin: true}));
    app.use(createProxyMiddleware ("/latest",{ target: "https://api.exchangeratesapi.io/", changeOrigin: true}));
    
}; 