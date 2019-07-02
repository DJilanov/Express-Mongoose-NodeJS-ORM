const mongoose = require('mongoose');
const uuid = require('uuid');

module.exports = mongoose.model(
  'Book', 
  {
    _id: { 
      type: String, 
      default: uuid.v4
    },
    isbn: {
      type: String
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
  }
);