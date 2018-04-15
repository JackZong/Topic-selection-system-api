'use strict';

var express = require('express');
var thesisCtrl = require('./thesis.controller');
var router = express.Router();
router.route('/').get(thesisCtrl.list);
module.exports = router;