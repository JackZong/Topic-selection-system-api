'use strict';

var express = require('express');
var mentorCtrl = require('../controllers/mentor.controller');
var router = express.Router();
router.post('/list', mentorCtrl.list);
module.exports = router;