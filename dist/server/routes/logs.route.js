'use strict';

var express = require('express');
var logsCtrl = require('../controllers/logs.controller');
var router = express.Router();
router.post('/list', logsCtrl.list);
module.exports = router;