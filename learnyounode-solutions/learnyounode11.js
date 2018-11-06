const http = require('http');
const fs = require('fs');

const portNumber = process.argv[2];
const fileLocation = process.argv[3];

var server = http.createServer( (request, response) => {
    let readStream = fs.createReadStream(fileLocation);

    readStream.on('open', function () {
        readStream.pipe(response);
      });
    
      readStream.on('error', function(err) {
        response.end(err);
      });
});

server.listen(portNumber);