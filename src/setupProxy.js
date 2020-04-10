import { createProxyMiddleware } from "http-proxy-middleware";

export default function(app){
<<<<<<< HEAD
    app.use(createProxyMiddleware ("", {target: "https://maps.googleapis.com", changeOrigin: true}));
    app.use(createProxyMiddleware ("",{ target: "http://api.openweathermap.org", changeOrigin: true}));
    app.use(createProxyMiddleware ("",{ target: "https://api.exchangeratesapi.io", changeOrigin: true}));
=======
    app.use(createProxyMiddleware ("/maps", {target: "https://maps.googleapis.com", changeOrigin: true}));
    app.use(createProxyMiddleware ("/api.openweathermap.org",{ target: "http://", changeOrigin: true}));
    app.use(createProxyMiddleware ("/latest",{ target: "https://api.exchangeratesapi.io/", changeOrigin: true}));
>>>>>>> parent of 3380a1e... f
    
}; 