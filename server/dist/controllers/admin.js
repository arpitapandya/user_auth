"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user"));

var changePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, _req$body, username, newPassword, simUser;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = req.user, _req$body = req.body, username = _req$body.username, newPassword = _req$body.newPassword;

            if (user) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              error: 'Invalid token'
            }));

          case 3:
            if (!(!newPassword || newPassword.length < 8)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              error: 'password must be 8 characters long'
            }));

          case 5:
            _context.next = 7;
            return _user["default"].findByUserName(username);

          case 7:
            simUser = _context.sent;

            if (simUser) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              error: 'user not found'
            }));

          case 10:
            _context.next = 12;
            return simUser.updateOne({
              password: newPassword
            });

          case 12:
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function changePassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  changePassword: changePassword
};