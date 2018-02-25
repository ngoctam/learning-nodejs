var http = require('http');
var fs = require('fs');

/*
* Streams and Performance
*/
http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    fs.createReadStream(__dirname + '/index2.htm').pipe(res);
    
}).listen(1337, '127.0.0.1');