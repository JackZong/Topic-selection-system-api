'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./server/auth/auth.route');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('./server/user/user.route');

var _user2 = _interopRequireDefault(_user);

var _thesis = require('./server/thesis/thesis.route');

var _thesis2 = _interopRequireDefault(_thesis);

var _presel = require('./server/routes/presel.route');

var _presel2 = _interopRequireDefault(_presel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/help-check', function (req, res) {
	res.send('OK');
});
router.use('/users/', _user2.default);
router.use('/thesis/', _thesis2.default);
router.use('/preselection/', _presel2.default);
module.exports = router;