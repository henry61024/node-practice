var http = require('http'),
    url = require('url');

exports.start = start;

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('pathName:', pathname);
        console.log('request.url:', request.url);
    
        route(pathname);
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        response.end('<h1>Hello World</h1>');
    }

    http.createServer(onRequest)
        .listen(8080);
}