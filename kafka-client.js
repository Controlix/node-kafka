var kafka = require('kafka-node');

var Consumer = kafka.Consumer;

var client = new kafka.KafkaClient();

var topics = [{topic: 'boot.t'}];
var options = {fromOffset: true};
var consumer = new Consumer(client, topics, options);

consumer.on('message', function(message) {
  console.log(message);
});


