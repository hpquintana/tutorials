var http = require('http');

let url = process.argv[2];

http.get(url, res => {
    res.setEncoding('utf8');
    let rawData = '';

    res.on('data', (data) => { 
        rawData += data;
    });
    
    res.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    });
});