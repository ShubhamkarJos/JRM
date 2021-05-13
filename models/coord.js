

const mongoose = require('mongoose');


const UserSchema1 = new mongoose.Schema({
  lat: Number,
  log: Number,
  issue: String
});

const coord = mongoose.model('coord', UserSchema1);

module.exports = coord;


