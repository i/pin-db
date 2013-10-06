var amqp = require('amqp');

var connection = amqp.createConnection({ host: '127.0.0.1' });

connection.on('ready', function() {
  connection.queue('worker', function(q) {
    q.bind('#');

    q.subscribe(function(message) {
      console.log(message);
    });
  });
});

// Ian's code goes here
