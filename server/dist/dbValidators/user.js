"use strict";

var _utils = require("../utils");

var emailValidator = function emailValidator(email) {
  return _utils.regexUtils.emailVarification(email);
};

var passwordValidator = function passwordValidator(password) {
  return password !== undefined;
};

module.exports = {
  emailValidator: emailValidator,
  passwordValidator: passwordValidator
};