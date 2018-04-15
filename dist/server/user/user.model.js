'use strict';

var Promise = require('bluebird');
var Sequelize = require('sequelize');
var httpStatus = require('http-status');
var APIError = require('../helpers/APIError');
var sequelize = require('../../config/mssql');

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

function list() {
  // sequelize.query('SELECT * FROM Student').spread((res,meta) => {
  //    return res
  //  })
  Student.findAll({
    attributes: ['st_name', 'st_id'],
    raw: true
  }).then(function (student) {
    console.log(student);
    return student;
  }).catch(function (err) {
    console.log(err);
  });
}
function get() {}
module.exports = { list: list, get: get };