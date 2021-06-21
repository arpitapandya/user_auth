"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./users"));

var _admin = _interopRequireDefault(require("./admin"));

var router = _express["default"].Router();

router.use('/user', _users["default"]);
router.use('/admin', _admin["default"]);
module.exports = router;