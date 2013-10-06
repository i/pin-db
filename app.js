
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

var connection = amqp.createConnection({host: 'localhost'});
connection.on('ready', function(){
  connection.publish('worker', 'Hello World!');
  console.log(" [x] Sent 'Hello World!'");
});

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
  var tempPath = req.files.file.path,
  targetPath = path.resolve('/tmp/files/image.png');
if (path.extname(req.files.file.name).toLowerCase() === '.png') {
  fs.rename(tempPath, targetPath, function(err) {
    if (err) throw err;
    console.log("Upload completed!");
  });
} else {
  fs.unlink(tempPath, function () {
    if (err) throw err;
    console.error("Only .png files are allowed!");
  });
}
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


