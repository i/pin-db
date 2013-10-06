var amqp = require('amqp');

var connection = amqp.createConnection({ host: '127.0.0.1' });

connection.on('ready', function() {
  connection.queue('worker', function(q) {
    q.bind('#');
    q.subscribe(function(message) {
      console.log("Got: " + message.data.toString());
      var child = require('child_process').exec("./imgTemp.sh " + message.data.toString());
      child.stdout.on('data', function(data) {
        console.log(data.toString());
      });
    });
  });
});
