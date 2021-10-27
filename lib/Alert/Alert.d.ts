import React from 'react';
import './style';
interface AlertProps {
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
