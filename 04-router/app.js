var url = require('url');
var fs = require('fs');

function renderHTML(path, res) {
    fs.readFile(path, 'utf-8', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        }
        else{
             res.write(data);
        }
        res.end();
    });
};


module.exports = {
    handleRequest: function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', res);
                break;
            case '/login':
                renderHTML('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('Router not found!');
                res.end();
        }
    }
};