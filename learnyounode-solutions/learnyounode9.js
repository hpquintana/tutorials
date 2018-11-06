var http = require('http');

let url0 = process.argv[2];
let url1 = process.argv[3];
let url2 = process.argv[4];

var resultArray = [];
var completed = 0;
var totalCount = 3;

httpGet(0);
httpGet(1);
httpGet(2);

function httpGet(index){
    http.get(process.argv[index + 2], res => {
        res.setEncoding('utf8');
        let rawData = '';
    
        res.on('data', (data) => { 
            rawData += data;
        });
        
        res.on('end', () => {
            resultArray[index] = rawData;
            completed++;

            if(completed >= totalCount){
                printResults();
            }
        });
    });
}

function printResults(){
    resultArray.forEach(readString => {
        console.log(readString);
    });
}