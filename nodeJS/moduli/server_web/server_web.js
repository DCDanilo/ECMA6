const http = require('http');

const server = http.createServer(
    function (req, res) {
        res.writeHead(200);
        res.end('Servere');
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');