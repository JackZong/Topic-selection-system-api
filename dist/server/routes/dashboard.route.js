'use strict';

var express = require('express');
var dashboardCtrl = require('../controllers/dashboard.controller');
var router = express.Router();
router.get('/', dashboardCtrl.list);
module.exports = router;