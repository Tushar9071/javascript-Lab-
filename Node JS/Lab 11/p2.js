const http = require('http');
const fs = require('fs');
const { log, error } = require('console');

http.createServer((req,resp)=>{
    if(req.url === '/')
    {
       fs.readFile('home.html',(error,data)=>{
        if(error) console.log(error)
        if(data) {
            resp.writeHead(200,'content-type','http/text')
            resp.end(data)
        }
       })
    }
    else if(req.url === '/help')
    {
       fs.readFile('help.html',(error,data)=>{
        if(error) console.log(error)
        if(data) {
            resp.writeHead(200,'content-type','http/text')
            resp.end(data)
        }
       })
    }
    else if(req.url === '/contactus')
    {
       fs.readFile('contactus.html',(error,data)=>{
        if(error) console.log(error)
        if(data) {
            resp.writeHead(200,'content-type','http/text')
            resp.end(data)
        }
       })
    }
    else if(req.url === '/aboutus')
    {
       fs.readFile('aboutus.html',(error,data)=>{
        if(error) console.log(error)
        if(data) {
            resp.writeHead(200,'content-type','http/text')
            resp.end(data)
        }
       })
    }
   else if(req.url === '/university')
    {
       fs.readFile('university.html',(error,data)=>{
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