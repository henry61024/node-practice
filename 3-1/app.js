var http = require('http');
var httpServer = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    response.end('<h1>Hello World</h1>');
});

httpServer.listen(3000);