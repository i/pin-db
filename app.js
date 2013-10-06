/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var amqp = require('amqp');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/upload', function(req, res) {
  var tempPath = req.files.file.path;
  console.log("Upload completed!");
  var connection = amqp.createConnection({host: '127.0.0.1'});
  connection.on('ready', function() { 
    console.log(tempPath);
    connection.publish('worker', tempPath);
  });
  res.send("Got it");
});

app.get('/download', function(req, res) {
  console.log(req.params.name);
  res.download('/tmp/files/stockphotocopy.jpeg');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
