const express = require('express');
const router = express.Router();
const axios = require('axios');
const Message = require('../models/message.js');
const searchKey = process.env.SEARCH_KEY;
const cx = process.env.CX;

router.post('/', (req, res) => {
  const { queryText } = req.body;
  const { recepient } = req.body;
  const { count } = req.body;

  //google custom search, get image urls
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
    saveMessage(response.data, recepient);
    res.send(response.data);
  })
  .catch(err => {
  console.log(err);
  });
});

const saveMessage = (data, recepient) => {
  console.log('NEW');
  console.log(data.items);
  var date = new Date();

  //queue messages to send in DB
  index = 0;
  data.items.map((item) => {
    date.setDate(date.getDate() + 1);

    const m = new Message({
      recepient: recepient,
      mediaUrl: data.items[index].link,
      date: new Date(date)
    });

    index++;
    m.save();
  });
}

module.exports = router;
