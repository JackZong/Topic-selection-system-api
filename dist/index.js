'use strict';

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express2.default.listen(3000, function () {
	console.log('run on 3000 port');
	console.log('changing');
});