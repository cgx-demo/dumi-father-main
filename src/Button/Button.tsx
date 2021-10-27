import React, { FC } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  outline: none;
  padding: 8px 16px;
  border: 1px solid gray;
`
interface ButtonProps {
  color: 'default' | 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ children, color = 'default' }) => {
  const bgColor = {
    info: '#5352ED',
    default: '#2ED573',
    primary: '#FF4757',
    secondary: '#FFA502',
  }
  return (
    <ButtonStyle style={{ backgroundColor: bgColor[color] }}>
      {children}
    </ButtonStyle>
  )
}

export default Button;
