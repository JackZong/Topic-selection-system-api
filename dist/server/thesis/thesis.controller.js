'use strict';

var Thesis = require('./thesis.model');
function list(req, res, next) {
	Thesis.list().then(function (response) {
		res.json(response);
	}).catch(function (err) {
		console.log('thesis query', err);
		res.json({ code: -1, msg: 'thesis query api error' });
	});
}
module.exports = { list: list };