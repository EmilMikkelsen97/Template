const fs = require("fs");
const file = "log.txt";

module.exports = () => {
    function skrivDataIStartenAfFilen() {
        var data = fs.readFileSync(file);
        var buffer = new Buffer(new Date().toUTCString() + "\tMessage: ...\n");

        var fd = fs.openSync(file, 'w+');

        fs.appendFile(fd, buffer);
        fs.appendFile(fd, data);
        fs.close(fd);
    }
}