"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _user = _interopRequireDefault(require("../models/user"));

var jwtAuthOpts = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

_passport["default"].use(new _passportJwt.Strategy(jwtAuthOpts, function (jwtPayload, done) {
  _user["default"].findById(jwtPayload.userId, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  });
}));