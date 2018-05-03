'use strict';

var Mentor = require('../models/mentor.model');
function list(req, res, next) {
    Mentor.list().then(function (response) {
        console.log(response);
        res.json({ code: 1, msg: 'success', data: response[0] });
    }).catch(function (err) {
        console.log(err);
        res.json({ code: 0, msg: 'query teacher list error' });
    });
}
module.exports = { list: list };