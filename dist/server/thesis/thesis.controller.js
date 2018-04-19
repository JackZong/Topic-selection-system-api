'use strict';

var Thesis = require('./thesis.model');
function list(req, res, next) {
	Thesis.list(req.query).then(function (response) {
		Thesis.count().then(function (count) {
			return res.json({ code: 1, msg: 'success', data: response, page: {
					count: count.length,
					page: parseInt(req.query.page),
					page_limit: parseInt(req.query.page_limit)
				} });
		}).catch(function (err) {
			res.json({ code: -1, msg: 'get count error' });
		});
	}).catch(function (err) {
		console.log(err);
		res.json({ code: -1, msg: 'thesis query api error' });
	});
}
module.exports = { list: list };