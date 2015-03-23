var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.listen(port);
console.log('Server listening on ' + port);

app.use(express.static(__dirname + '/public'));

