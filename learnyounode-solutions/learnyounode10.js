var net = require('net');

const portNumber = process.argv[2];
const newLineChar = `\n`;

var server = net.createServer(socket => {
    //need to output YYYY-MM-DD hh:mm
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();


    month = addZero(month + 1); //getMonth starts at 0
    day = addZero(day);
    hour = addZero(hour);
    minute = addZero(minute);

    socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + newLineChar);
    socket.end();
});

server.listen(portNumber);

function addZero(dateNumber){
    if(dateNumber < 10){
        return '0' + dateNumber;
    } else {
        return '' + dateNumber;
    }
}