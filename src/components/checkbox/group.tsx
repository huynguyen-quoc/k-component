import { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox/Group'
import { Checkbox as AntCheckbox } from 'antd'
import React, { forwardRef } from 'react'

export { CheckboxGroupProps as MocaCheckboxGroupProps, CheckboxOptionType as MocaCheckboxOptionType }

export const MocaCheckboxGroup = forwardRef<any, CheckboxGroupProps>((props, ref) => (
  <AntCheckbox.Group {...props} ref={ref} />
))

MocaCheckboxGroup.displayName = 'MocaCheckboxGroup'

export default MocaCheckboxGroup
