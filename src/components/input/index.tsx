import React from 'react'
import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/es/input'

export const Input: React.FC<InputProps> = (props: InputProps) => <AntInput {...props} />

export default Input
