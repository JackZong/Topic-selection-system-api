'use strict';

var Sequelize = require('Sequelize');
var sequelize = require('../../config/mssql');
var Message = sequelize.define('message', {
	'msg_id': Sequelize.INTEGER,
	'msg_sender_id': Sequelize.STRING,
	'msg_sender_name': Sequelize.STRING,
	'msg_receiver_id': Sequelize.STRING,
	'msg_receiver_name': Sequelize.STRING,
	'msg_content': Sequelize.STRING,
	'msg_sendtime': Sequelize.STRING,
	'msg_visible': Sequelize.STRING
}, {
	timestamp: false,
	tableName: 'message',
	underscored: true,
	freezeTableName: true
});
function add(payload) {
	return Message.create(payload);
}
function getMyMsg(payload) {
	return Message.findAll({
		attributes: ['msg_content'],
		where: { 'msg_receiver_id': payload.username }
	});
}
module.exports = { Message: Message, add: add, getMyMsg: getMyMsg };