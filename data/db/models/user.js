const mongoose = require('mongoose');
const uuid = require('uuid');

module.exports = mongoose.model(
  'User', 
  {
    _id: { 
      type: String, 
      default: uuid.v4
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  }
);