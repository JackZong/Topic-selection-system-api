'use strict';

var express = require('express');
var preselCtrl = require('../controllers/presel.controller');
var router = express.Router();
router.put('/add').get(preselCtrl.selection);
module.exports = router;