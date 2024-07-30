'use strict'
const express = require('express');
const router = express();
const list = require('./listRoutes');
const auth = require('./authRoutes');

router.get(`/api/`, (_req, res) => {
  res.json({
    "message": "Testing API"
  });
});

router.use(list);
router.use(auth);

module.exports = router;