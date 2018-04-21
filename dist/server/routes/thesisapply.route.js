'use strict';

var express = require('express');
var thesisApplyCtrl = require('../controllers/thesisApply.controller');
var router = express.Router();
router.post('/list', thesisApplyCtrl.list);
module.exports = router;