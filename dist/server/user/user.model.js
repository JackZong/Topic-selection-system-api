'use strict';

var Promise = require('bluebird');
var Sequelize = require('sequelize');
var httpStatus = require('http-status');
var APIError = require('../helpers/APIError');
var sequelize = require('../../config/mssql');

var _require = require('../models/mentor.model'),
    Mentor = _require.Mentor;

var Student = sequelize.define('student', {
  st_name: {
    type: Sequelize.STRING
  },
  st_id: {
    type: Sequelize.STRING
  },
  st_d_id: {
    type: Sequelize.STRING
  },
  st_mj_id: {
    type: Sequelize.STRING
  },
  st_sex: {
    type: Sequelize.STRING
  },
  st_grade: {
    type: Sequelize.STRING
  },
  st_class: {
    type: Sequelize.STRING
  },
  st_telephone: {
    type: Sequelize.STRING
  },
  st_qq: {
    type: Sequelize.STRING
  },
  st_email: {
    type: Sequelize.STRING
  },
  st_password: {
    type: Sequelize.STRING
  },
  st_question: {
    type: Sequelize.STRING
  },
  st_answer: {
    type: Sequelize.STRING
  },
  st_introduce: {
    type: Sequelize.STRING
  },
  st_graduation_year: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'Student',
  timestamps: false
});
function count() {
  return Student.findAll({
    attributes: ['st_id'],
    raw: true
  });
}
function list(payload) {
  return Student.findAll({
    attributes: ['st_id', 'st_name', 'st_sex', 'st_grade', 'st_class', 'st_telephone', 'st_qq', 'st_email'],
    raw: true,
    offset: parseInt(payload.page_limit) * parseInt(payload.page),
    limit: parseInt(payload.page_limit),
    order: [['st_id', 'DESC']]
  });
}
function get() {}
function login(payload) {
  if (payload.username.length === 6) {
    return Mentor.findOne({
      attributes: [['mt_password', 'password']],
      raw: true,
      where: { 'mt_id': payload.username }
    });
  } else {
    return Student.findOne({
      attributes: ['st_password'],
      raw: true,
      where: { 'st_id': payload.username }
    });
  }
}
module.exports = { list: list, get: get, login: login, count: count, Student: Student };