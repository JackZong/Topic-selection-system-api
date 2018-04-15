'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var httpStatus = require('http-status');

var ExtendableError = function (_Error) {
	_inherits(ExtendableError, _Error);

	function ExtendableError(message, status, isPublic) {
		_classCallCheck(this, ExtendableError);

		var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

		_this.name = _this.constructor.name;
		_this.message = message;
		_this.status = status;
		_this.isPublic = isPublic;
		_this.isOperational = true;
		Error.captureStackTrace(_this, _this.constructor.name);
		return _this;
	}

	return ExtendableError;
}(Error);

var APIError = function (_ExtendableError) {
	_inherits(APIError, _ExtendableError);

	function APIError(message) {
		var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : httpStatus.INTERNAL_SERVER_ERROR;
		var isPublic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		_classCallCheck(this, APIError);

		return _possibleConstructorReturn(this, (APIError.__proto__ || Object.getPrototypeOf(APIError)).call(this, message, status, isPublic));
	}

	return APIError;
}(ExtendableError);

module.exports = APIError;