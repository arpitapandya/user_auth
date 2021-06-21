"use strict";

/* eslint-disable no-useless-escape */
// eslint-disable-next-line security/detect-unsafe-regex
var EMAIL_VARIFICATION = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

var emailVarification = function emailVarification(email) {
  return EMAIL_VARIFICATION.test(email);
};

module.exports = {
  emailVarification: emailVarification
};