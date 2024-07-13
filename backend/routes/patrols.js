const express = require('express');
const router = express.Router();
const PatrolLog = require('../models/patrolLog');

router.post('/', async (req, res) => {
  const patrolLog = new PatrolLog(req.body);
  await patrolLog.save();
  res.status(201).send(patrolLog);
});

module.exports = router;