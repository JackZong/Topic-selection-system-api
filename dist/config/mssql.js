'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = _config2.default.db;

function pool(callback) {
  return new _mssql2.default.ConnectionPool(db).connect();
}
exports.default = pool;