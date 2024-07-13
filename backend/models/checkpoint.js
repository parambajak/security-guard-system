const mongoose = require('mongoose');

const checkpointSchema = new mongoose.Schema({
  name: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  qrCode: String
});

module.exports = mongoose.model('Checkpoint', checkpointSchema);