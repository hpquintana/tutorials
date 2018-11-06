var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var text = buffer.toString();

var textArr = text.split('\n');

console.log(textArr.length - 1);