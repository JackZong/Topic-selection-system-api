'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['select * from Class'], ['select * from Class']),
    _templateObject2 = _taggedTemplateLiteral(['SELECT st_password FROM Student WHERE st_id = ', ''], ['SELECT st_password FROM Student WHERE st_id = ', '']);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _mssql = require('../../config/mssql');

var _mssql2 = _interopRequireDefault(_mssql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getList = (0, _mssql2.default)().then(function (res) {
	return res.query(_templateObject);
}).catch(function (err) {
	console.log(err);
});
var login = function login(params) {
	console.log(_typeof(params.username));
	return (0, _mssql2.default)().then(function (request) {
		return request.query(_templateObject2, params.username);
	}).catch(function (err) {
		console.log(err);
	});
};
module.exports = {
	getList: getList,
	login: login
};