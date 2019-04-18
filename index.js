const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const sendRoutes = require('./send.js');
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/imageDB', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  const count = mongoose.connection.db.collection('myCollection').countDocuments();
  count.then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  });
});

//create Mongoose text model with function to send
// client.messages.create({
//     body: 'Hello from Node',
//     to: '+17324031686',  // Text this number
//     mediaUrl: 'https://i.ytimg.com/vi/3z2EzQvpbok/maxresdefault.jpg',
//     from: '+17326055590' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));


app.get('/', (req, res) => {
	res.send('hello');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/send', sendRoutes)

app.listen(PORT , () => {
	console.log(`Listening on port ${PORT}`);
});