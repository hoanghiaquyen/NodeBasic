var http = require('http');

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World! Xin chao moi nguoi');
    res.end();
}

http.createServer(onRequest).listen(8000);