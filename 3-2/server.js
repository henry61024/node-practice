var http = require('http');

exports.start = start;

function start() {
    http.createServer(onRequest)
        .listen(8080);
}

function onRequest(request, response) {
    console.log('request:', request);
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    response.end('<h1>Hello World</h1>');
}