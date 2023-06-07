// Import modules
const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");
    
// Export the get file function
module.exports = {
    getFile: (file, res) => {
        // Attempt to read the file e.g. ./courses.html
        fs.readFile(`./${file}`, (error, data) => {
            // In the case of an error, write a 404 error header and display an error.
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html);
                res.end("There was an error serving content!");
            }
            // Send back the html as a response, to be displayed.
            // end function will inform client that no more data will be sent.
            // Necessary otherwise page will hang.
            res.end(data);
            console.log(res);
        });
    }
};