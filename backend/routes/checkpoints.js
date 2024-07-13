const express = require('express');
const router = express.Router();
const Checkpoint = require('../models/checkpoint');

router.post('/', async (req, res) => {
  const checkpoint = new Checkpoint(req.body);
  await checkpoint.save();
  res.status(201).send(checkpoint);
});

module.exports = router;