'use strict';

function getQueryObj(queryStr) {
  console.log(queryStr);
  var arr = queryStr.split("&");
  var obj = {};
  arr.forEach(function (item, index, arr) {
    var temp = item.split('=');
    obj[temp[0]] = temp[1];
  });
  console.log(obj, 'obj');
  return obj;
}
module.exports = { getQueryObj: getQueryObj };