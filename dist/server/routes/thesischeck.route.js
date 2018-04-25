'use strict';

var express = require('express');
var thesisCheckCtrl = require('../controllers/thesisCheck.controller');
var router = express.Router();
router.route('/').get(thesisCheckCtrl.list).put(thesisCheckCtrl.update);

module.exports = router;