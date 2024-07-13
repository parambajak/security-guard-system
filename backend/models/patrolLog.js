const mongoose = require('mongoose');

const patrolLogSchema = new mongoose.Schema({
  checkpointId: mongoose.Schema.Types.ObjectId,
  guardId: mongoose.Schema.Types.ObjectId,
  timestamp: Date,
  location: {
    latitude: Number,
    longitude: Number
  }
});

module.exports = mongoose.model('PatrolLog', patrolLogSchema);