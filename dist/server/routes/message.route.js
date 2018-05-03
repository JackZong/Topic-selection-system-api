'use strict';

var express = require('express');
var messageCtrl = require('../controllers/message.controller');
var router = express.Router();
router.post('/new', messageCtrl.add);
router.post('/my', messageCtrl.getMyMsg);
module.exports = router;