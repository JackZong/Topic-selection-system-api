'use strict';

var app = require('./config/express');
app.listen(3000, function () {
	console.log('run on 3000 port');
	console.log('changing');
});