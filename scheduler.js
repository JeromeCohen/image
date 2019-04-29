//For Heroku scheduler instead of cron
const clearQueue = require('./sendMessages.js');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open')
});

clearQueue();
