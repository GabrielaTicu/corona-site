const http = require("http");
const fs = require('fs');
const path = require('path');
  
http.createServer(function(request, response){     
    if(request.url === "/"){
        sendRes('index.html', 'text/html', response);
    } else if(/\/css\/[^\/]+$/.test(request.url)) {
        sendRes('css/stylesheet.css', 'text/css', response);
    } else if(/\/images\/[^\/]+$/.test(request.url)) {
        sendRes(request.url, 'image/jpg', response);
    } else if(/\/data\/[^\/]+$/.test(request.url)) {
        sendRes(request.url, 'text/plain', response);
    } else{
        sendRes('script.js', 'text/javascript', response);
    }
}).listen(3000);

function sendRes(url, contentType, res) {
    let file = path.join(__dirname, url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
            res.end();
        } else{
            res.writeHead(202);
            res.write(content);
            res.end();
        }
    });
}

var data = fs.readFileSync(__dirname + '/data/data.txt', 'utf-8').split("\n");
for (var i = 0; i < data.length; i++) {
    console.log(i + ": " + data[i]);
}