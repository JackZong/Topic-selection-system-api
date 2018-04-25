'use strict';

var express = require('express');
var profileCtrl = require('../controllers/profile.controller');
var router = express.Router();
router.post('/', profileCtrl.findOne);
module.exports = router;