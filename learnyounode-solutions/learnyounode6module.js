var fs = require('fs');
var path = require('path');

// exports.myFunction = function (directory, fileExtension, callback) {
module.exports = function (directory, fileExtension, callback) {
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err, null);
        }
        
        let desiredFileType = `.${fileExtension}`;
        let returnArray = [];
        list.forEach(fileName => {
            if(path.extname(fileName) == desiredFileType){
                returnArray.push(fileName);
            }
        });
        callback(null, returnArray);
      });
};
