var http = require('http');
console.log("this server is runnning on http://localhost:8080 ");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);