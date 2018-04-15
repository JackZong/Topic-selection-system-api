'use strict';

var jwt = require('jsonwebtoken');
var httpStatus = require('http-status');
var APIError = require('../helpers/APIError');
var config = require('../../config/config');