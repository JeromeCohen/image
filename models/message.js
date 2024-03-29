const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  recepient: String,
  mediaUrl: String,
  date: Date
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
