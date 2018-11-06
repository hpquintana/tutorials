var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (err) 
        throw err;

    let desiredFileType = `.${process.argv[3]}`;

    list.forEach(fileName => {
        if(path.extname(fileName) == desiredFileType){
            console.log(fileName);
        }
    });
  });