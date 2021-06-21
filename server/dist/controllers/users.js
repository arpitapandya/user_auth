"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var _middlewares = require("../middlewares");

var _utils = require("../utils");

var show = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", res.status(200).json({
              user: req.user
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function show(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var users = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user = req.user;

            if (!(user.role !== 'admin')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              error: 'not have permission to get all user dat'
            }));

          case 3:
            _context2.t0 = res.status(200);
            _context2.next = 6;
            return _user["default"].find();

          case 6:
            _context2.t1 = _context2.sent;
            _context2.t2 = {
              users: _context2.t1
            };

            _context2.t0.json.call(_context2.t0, _context2.t2);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function users(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var signup = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, username, password, age, role, user;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password, age = _req$body.age, role = _req$body.role;
            _context3.next = 3;
            return _user["default"].findByUserName(username);

          case 3:
            user = _context3.sent;

            if (!user) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              error: 'Username has already been taken'
            }));

          case 6:
            _context3.next = 8;
            return _user["default"].createUser(username, password, age, role);

          case 8:
            user = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              user: user,
              token: _middlewares.authMiddleware.generateAuthToken(user.id)
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signup(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var login = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, username, password, user;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
            _context4.next = 3;
            return _user["default"].findByUserName(username);

          case 3:
            user = _context4.sent;
            _context4.t0 = !user;

            if (_context4.t0) {
              _context4.next = 9;
              break;
            }

            _context4.next = 8;
            return _utils.hashingUtils.verify(user.password, password);

          case 8:
            _context4.t0 = !_context4.sent;

          case 9:
            if (!_context4.t0) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              error: 'Invalid username or password.'
            }));

          case 11:
            return _context4.abrupt("return", res.status(200).json({
              user: user,
              token: _middlewares.authMiddleware.generateAuthToken(user.id)
            }));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function login(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var changePassword = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var user, newPassword;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            user = req.user, newPassword = req.body.newPassword;

            if (user) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", res.status(401).json({
              error: 'Invalid token'
            }));

          case 3:
            if (!(!newPassword || newPassword.length < 8)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(401).json({
              error: 'password must be 8 characters long'
            }));

          case 5:
            _context5.next = 7;
            return user.updateOne({
              password: newPassword
            });

          case 7:
            return _context5.abrupt("return", res.status(200).json({
              success: true
            }));

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function changePassword(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  signup: signup,
  login: login,
  changePassword: changePassword,
  show: show,
  users: users
};