const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const axios = require('axios');
const message = require('../models/message').message; 

var accountSid = 'AC9ff4d4036316537316e6b77c1556a52c'; // Your Account SID from www.twilio.com/console
var authToken = '753c9eedc58e1c2a1884e6aad70e29d0';   // Your Auth Token from www.twilio.com/console
var searchKey = 'AIzaSyAYOZJNaZqTF3R8fSCgxfCb1EcuQTUSVxI';
var cx = '000252337303238366922:s1-wjnyqrju';
var client = new twilio(accountSid, authToken);

router.post('/', (req, res) => {
  const { queryText } = req.body;
  const { recepient } = req.body;
  const { count } = req.body;

  query = "https://www.googleapis.com/customsearch/v1?"
  axios.get(query, {
    params: {
      key: searchKey,
      cx: cx,
      q:  queryText,
      searchType: 'image'
    }
  })
  .then(response => {
    console.log(req.body);
    data = response.data;
    for (item in data.items) {
      console.log(data.items[item].link);
    }
    res.send(response.data);
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
