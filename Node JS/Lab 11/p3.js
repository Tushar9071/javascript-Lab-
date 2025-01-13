const http = require('http');
const fs = require('fs');
const { log, error } = require('console');

http.createServer((req,resp)=>{
    if(req.url === '/')
    {
       fs.readFile('home.txt',(error,data)=>{
        if(error) console.log(error)
        if(data) {
            resp.writeHead(200,'content-type','http/text')
            resp.end(data)
        }
       })
    }
    else if(req.url === '/help')
    {
       fs.readFile('help.txt',(error,data)=>{
        if(error) console.log(error)
        if(data) {
            resp.writeHead(200,'content-type','http/text')
            resp.end(data)
        }
       })
    }
    
}).listen(3000,()=>{
    console.log('Server is started')
})