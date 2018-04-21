'use strict';

var express = require('express');
var thesisCtrl = require('./thesis.controller');
var router = express.Router();
router.route('/list').get(thesisCtrl.list);
router.put('/add', thesisCtrl.add);
router.put('/update', thesisCtrl.update);
module.exports = router;