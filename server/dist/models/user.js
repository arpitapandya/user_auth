"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _utils = require("../utils");

var _dbValidators = require("../dbValidators");

var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: [8, 'password must be at least 8 characters'],
    validate: {
      validator: _dbValidators.userValidator.passwordValidator,
      message: function message() {
        return 'Not Valid password';
      }
    }
  },
  age: {
    type: Number
  },
  role: {
    type: String,
    required: true
  }
});

userSchema.statics.findByUserName = function (username) {
  return this.findOne({
    username: username
  });
};

userSchema.statics.createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password, age, role) {
    var hashPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils.hashingUtils.encrypt(password);

          case 2:
            hashPassword = _context.sent;
            return _context.abrupt("return", this.create({
              username: username,
              password: hashPassword,
              age: age,
              role: role
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.pre('updateOne', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!this._update.password) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return _utils.hashingUtils.encrypt(this._update.password);

          case 3:
            this._update.password = _context2.sent;

          case 4:
            next();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x5) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = _mongoose["default"].model('User', userSchema);