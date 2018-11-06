const http = require('http');

const portNumber = process.argv[2];

var server = http.createServer( (request, response) => {
    let method = request.method;
    
    if(method === 'GET'){
        let urlData = request.url.split('?');
        let path = urlData[0];
        let isoString = 'iso=';
        let dateString = urlData[1].replace(isoString, '');

        if(path == '/api/parsetime'){
            let date = new Date(dateString);
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            let responseObject = {
                "hour": hour,
                "minute": minute,
                "second": second
            };
            response.end(JSON.stringify(responseObject));

        } else if(path == '/api/unixtime'){
            let date = new Date(dateString); 

            let milliTime = date.getTime();

            let responseObject = {"unixtime": milliTime};

            response.end(JSON.stringify(responseObject));
        } else {
            //not expected input
        }
    } else {
        //do nothing?
    }
});

server.listen(portNumber);