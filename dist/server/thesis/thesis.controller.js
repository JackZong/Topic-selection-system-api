'use strict';

var Thesis = require('./thesis.model');
function list(req, res, next) {
    res.json(Thesis.list());
}
module.exports = { list: list };