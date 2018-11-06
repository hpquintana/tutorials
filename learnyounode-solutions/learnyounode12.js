const http = require('http');

const portNumber = process.argv[2];

var server = http.createServer( (request, response) => {
    let method = request.method;
    
    if(method === 'POST'){
        let body = '';

        request.on('data', chunk => {
            body += chunk.toString();
        });

        request.on('end', () => {
            response.end(body.toUpperCase());
        });
    } else {
        //do nothing?
    }
});

server.listen(portNumber);