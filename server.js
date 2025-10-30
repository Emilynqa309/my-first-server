const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    // return the index.html if someone hits localhost:3000 or localhost:3000/index.html
    if (request.url === '/' || request.url === '/index.html') {
        // use fs to read our file system and give back the index.html
        fs.readFile('index.html', function(error, data) {
            if (error) {
                // if there's an error with reading the file, return a 500
                response.writeHead(500);
                response.end('Something went wrong on our end.');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html'});
                response.end(data);
            }
        })
    } else {
        // if url does not exist, return 404
        response.writeHead(404);
        response.end('Page not found');
    }
})

server.listen(3000, function() {
    console.log('Server is running at localhost:3000');
})



