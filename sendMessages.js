const Message = require('./models/message.js');
const accountSid = process.env.TWILIO_ACCOUNT; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
const client = require('twilio')(accountSid, authToken);

const clearQueue = () => {
  //TO REMOVE
  console.log('Clearing the Queue');

  //Testing mongodb queries
  const today = new Date();
  today.setHours(0, 0, 0 ,0);

  const tomorrow = new Date()
  tomorrow.setHours(24, 0, 0 ,0);

  const cursor = Message.find({ date: {$gte: today, $lt: tomorrow}}).cursor();
  cursor.on('data', function(m) {
    console.log(m);

    client.messages.create({
        body: 'Wassup',
        to: m.recepient,  // Text this number
        mediaUrl: m.mediaUrl,
        from: '+17326055590' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  });

  cursor.on('close', function() {
      console.log('Stream Finished');
  });
}
//need to build in async, wait, as well as deleting DB objects once sent (put in then)

module.exports = clearQueue
