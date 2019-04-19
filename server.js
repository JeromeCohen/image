const express = require('express');
const cron = require('node-cron');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const sendRoutes = require('./routes/send.js');
const Message = require('./models/message.js');
const sender = require('./sendMessages.js');
const PORT = process.env.PORT || 3000;

//Set up DB
mongoose.connect('mongodb://localhost/imageDB', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open')
});

//Cron Job to Check DB for Texts to Send
cron.schedule('0 0 0 * * *', () => {
  sender.clearQueue();
})

//Routes Boilerplate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/send', sendRoutes);
app.get('/', (req, res) => {
	res.send('hello');
});
app.listen(PORT , () => {
	console.log(`Listening on port ${PORT}`);
});
