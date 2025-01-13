const http = require('http');
http.createServer((req,resp)=>{
    resp.end('Hello Wolrd')
    
}).listen(3000,()=>{
    console.log('Server is started')
})