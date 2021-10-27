import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

var _templateObject;

import React from 'react';
import styled from 'styled-components';
var ButtonStyle = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  outline: none;\n  padding: 8px 16px;\n  border: 1px solid gray;\n"])));

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
  return /*#__PURE__*/React.createElement(ButtonStyle, {
    style: {
      backgroundColor: bgColor[color]
    }
  }, children);
};

export default Button;