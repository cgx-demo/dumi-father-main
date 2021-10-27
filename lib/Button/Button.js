"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var ButtonStyle = _styledComponents.default.button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  outline: none;\n  padding: 8px 16px;\n  border: 1px solid gray;\n"])));

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color;
  var bgColor = {
    info: '#5352ED',
    default: '#2ED573',
    primary: '#FF4757',
    secondary: '#FFA502'
  };
  return /*#__PURE__*/_react.default.createElement(ButtonStyle, {
    style: {
      backgroundColor: bgColor[color]
    }
  }, children);
};

var _default = Button;
exports.default = _default;