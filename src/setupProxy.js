import { createProxyMiddleware } from "http-proxy-middleware";

export default function(app){
    app.use(createProxyMiddleware ("", {target: "https://maps.googleapis.com", changeOrigin: true}));
    app.use(createProxyMiddleware ("",{ target: "http://api.openweathermap.org", changeOrigin: true}));
    app.use(createProxyMiddleware ("",{ target: "https://api.exchangeratesapi.io", changeOrigin: true}));
    
}; 