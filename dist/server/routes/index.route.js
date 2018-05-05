'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var express = require('express');
var authRoutes = require('./auth.route');
var userModel = require('../models/user.model');
var router = express.Router();
router.get('/users', function (req, res) {});
exports.default = router;