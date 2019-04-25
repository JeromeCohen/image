//For Heroku scheduler instead of cron
const sender = require('./sendMessages.js');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open')
});

sender.clearQueue();
