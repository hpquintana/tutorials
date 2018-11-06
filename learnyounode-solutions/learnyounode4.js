var fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
    if (err) 
        throw err;

    var text = data.toString();
    var textArr = text.split('\n');
    
    console.log(textArr.length - 1);
  });