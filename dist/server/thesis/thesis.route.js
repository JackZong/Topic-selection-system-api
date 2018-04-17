'use strict';

var express = require('express');
var thesisCtrl = require('./thesis.controller');
var router = express.Router();
router.route('/list').get(thesisCtrl.list);
module.exports = router;