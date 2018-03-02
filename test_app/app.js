var moment = require('moment');
console.log(moment().format("ddd, hA"));

var http = require('http');
var fs = require('fs');

/*
* Routing
*/
http.createServer(function(req, res) {
    
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index2.htm').pipe(res);
    }
    
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');
