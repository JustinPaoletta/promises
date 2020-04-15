/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // Read the File  (fs.readFile())
  fs.readFile(filePath, 'utf8', (err, file) => {
    // if error run callback with the err and file
    if (err) {
      callback(err, file);
    } else {
      // if no error split the file by line and grab the first one
      file = file.split('\n')[0];
      // run callback with null since no error and the file
      callback(null, file);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (error, res) => {
    if (error) {
      callback(error);
    } else {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
