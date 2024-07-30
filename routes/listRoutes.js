'use strict'
const express = require('express');
const list = require('../controllers/listController');
const {verifyToken} = require('../middleware/verify');
const router = express.Router();

router.get(`/api/todos`, verifyToken, list.index);
router.post(`/api/todos`, verifyToken, list.store);
router.get(`/api/todos/:id`, verifyToken, list.show);
router.put(`/api/todos/:id`, verifyToken, list.update);
router.delete(`/api/todos/:id`, verifyToken, list.destroy);

module.exports = router;