// route definitions
var home = require('./routes/home');

// the app
var app = require('express')();

// configure express
require('./config').initialize(app);

// routes
app.get('/', home.index);

// start server & socket.io
var server = require('http').createServer(app).listen(app.get('port'));

