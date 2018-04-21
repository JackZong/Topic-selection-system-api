'use strict';

var User = require('./user.model');
function load(req, res, next, id) {
	User.get(id).then(function (user) {
		req.user = user;
		return next();
	}).catch(function (e) {
		return next(e);
	});
}
function get(req, res) {
	return res.json(req.user);
}
function list(req, res, next) {
	var _req$query = req.query,
	    _req$query$page_limit = _req$query.page_limit,
	    page_limit = _req$query$page_limit === undefined ? 20 : _req$query$page_limit,
	    _req$query$page = _req$query.page,
	    page = _req$query$page === undefined ? 0 : _req$query$page;

	User.list({ page_limit: page_limit, page: page }).then(function (response) {
		User.count().then(function (count) {
			res.json({ code: 1, msg: 'success', data: response, page: {
					page_limit: parseInt(page_limit),
					page: parseInt(page),
					count: count.length }
			});
		}).catch(function (err) {
			res.json({ code: -1, msg: 'query student count err ' });
		});
	}).catch(function (err) {
		console.log(err);
		res.json({ code: -1, msg: 'query student list error' });
	});
}
function create(req, res, next) {
	var user = new User({
		username: req.body.username,
		mobileNumber: req.body.mobileNumber
	});
	user.save().then(function (saveUser) {
		return res.json(savedUser);
	}).catch(function (e) {
		return next(e);
	});
}
function update(req, res, next) {
	var _req$query2 = req.query,
	    _req$query2$limit = _req$query2.limit,
	    limit = _req$query2$limit === undefined ? 50 : _req$query2$limit,
	    _req$query2$skip = _req$query2.skip,
	    skip = _req$query2$skip === undefined ? 0 : _req$query2$skip;

	User.list({ limit: limit, skip: skip }).then().catch();
}
function remove(req, res, next) {
	var user = req.user;
	user.remove().then().catch();
}
function login(req, res, next) {
	User.login(req.body).then(function (response) {
		if (response.password === req.body.password) {
			res.json({ code: 1, msg: 'login suceess', data: { username: req.body.username } });
		} else {
			res.json({ code: 0, msg: 'password not correct' });
		}
	}).catch(function (err) {
		console.log('login fail', err);
		res.json({ code: -1, msg: 'request error' });
	});
}
module.exports = { load: load, list: list, create: create, update: update, remove: remove, login: login };