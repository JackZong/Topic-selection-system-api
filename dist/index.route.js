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

var _thesisapply = require('./server/routes/thesisapply.route');

var _thesisapply2 = _interopRequireDefault(_thesisapply);

var _logs = require('./server/routes/logs.route');

var _logs2 = _interopRequireDefault(_logs);

var _dashboard = require('./server/routes/dashboard.route');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _profile = require('./server/routes/profile.route');

var _profile2 = _interopRequireDefault(_profile);

var _thesischeck = require('./server/routes/thesischeck.route');

var _thesischeck2 = _interopRequireDefault(_thesischeck);

var _mentor = require('./server/routes/mentor.route');

var _mentor2 = _interopRequireDefault(_mentor);

var _message = require('./server/routes/message.route');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/help-check', function (req, res) {
	res.send('OK');
});
router.use('/users/', _user2.default);
router.use('/student/', _user2.default);
router.use('/thesis/', _thesis2.default);
router.use('/preselection/', _presel2.default);
router.use('/thesisapply/', _thesisapply2.default);
router.use('/logs/', _logs2.default);
router.use('/dashboard/', _dashboard2.default);
router.use('/profile/', _profile2.default);
router.use('/thesischeck/', _thesischeck2.default);
router.use('/teacher/', _mentor2.default);
router.use('/message/', _message2.default);
module.exports = router;