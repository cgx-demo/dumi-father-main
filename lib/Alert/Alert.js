"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./style");

var _excluded = ["children", "kind"];

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var prefixCls = 'happy-alert';
var kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'info' : _ref$kind,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", _objectSpread({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), children);
};

var _default = Alert;
exports.default = _default;