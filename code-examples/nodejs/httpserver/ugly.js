var http = require('http');
http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/') { 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else if (req.method === 'GET' && req.url === '/other') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Universe\n');
  }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');