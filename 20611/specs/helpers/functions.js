const fs = require('fs');
let helper = {};
helper.generateEmail = function(){
  const email = Math.random().toFixed(10) + '@gmail.com';
  return email;
}
helper.updateUser = function(){
  let userJson = fs.readFile('../testData/');
}

module.exports = helper;