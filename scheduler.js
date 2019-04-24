//For Heroku scheduler instead of cron
const sender = require('./sendMessages.js');
sender.clearQueue();
