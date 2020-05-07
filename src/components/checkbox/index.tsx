import React from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps as AntCheckboxProps } from 'antd/es/checkbox'

export const View: React.FC<AntCheckboxProps> = (props) => <AntCheckbox {...props} />

export default View
