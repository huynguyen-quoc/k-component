import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/es/button';

const Button: React.FC<ButtonProps> = (props) => <AntButton {...props} />;

export default Button;
