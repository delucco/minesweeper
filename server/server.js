var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

// configure our server with all the middleware and and routing
require('./middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);

// export our app for testing and flexibility
module.exports = app;
