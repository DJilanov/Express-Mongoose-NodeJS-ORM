const mongoose = require('mongoose');
const uuid = require('uuid');

module.exports = mongoose.model(
  'Institution', 
  {
    _id: { 
      type: String, 
      default: uuid.v4
    },
    name: {
      type: String
    },
    url: {
      type: String
    },
    emailDomain: {
      type: String
    }
  }
);