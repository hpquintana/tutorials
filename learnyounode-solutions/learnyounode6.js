var mymodule = require('./learnyounode6module');

let directory = process.argv[2];
let fileExtension = process.argv[3];

mymodule(directory, fileExtension, function(err, fileArray)  {
    if (err) {
       throw err;
    } else {
        fileArray.forEach(fileName => {
            console.log(fileName);
        });
    }
});