'use strict';

var express = require('express');
var preselCtrl = require('../controllers/presel.controller');
var router = express.Router();
router.put('/add', preselCtrl.selection);
router.post('/list', preselCtrl.list);
router.put('/update', preselCtrl.update);
module.exports = router;