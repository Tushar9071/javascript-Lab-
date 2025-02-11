const http = require('http');
const server = http.createServer((req, res) => {
    res.end('/lab4/p3.html');
})

server.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
})