'use strict';

var express = require('express');
var preselCtrl = require('../controllers/presel.controller');
var router = express.Router();
router.put('/add').get(preselCtrl.selection);
router.post('/list', preselCtrl.list);
module.exports = router;