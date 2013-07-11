var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs'), filename = 'index.html';

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('File: ' + filename);
  app.get('/', function(request, response) {
    response.send(data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
