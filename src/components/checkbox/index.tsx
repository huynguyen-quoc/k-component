import React, { forwardRef } from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps, CheckboxGroupProps, CheckboxOptionType, CheckboxChangeEvent } from 'antd/es/checkbox'

type MocalCheckbox = AntCheckbox & HTMLElement

export const MocaCheckbox = forwardRef<MocalCheckbox, CheckboxProps>((props, ref) => (
  <AntCheckbox {...props} ref={ref} />
))

MocaCheckbox.displayName = 'MocaCheckbox'

export { CheckboxProps, CheckboxGroupProps, CheckboxOptionType, CheckboxChangeEvent }

type MocaCheckbox = typeof MocaCheckbox
interface Checkbox extends MocaCheckbox {
  Group: typeof AntCheckbox.Group
}
const Checkbox: Checkbox = MocaCheckbox as Checkbox

export const CheckboxGroup = AntCheckbox.Group
Checkbox.Group = CheckboxGroup
export default Checkbox
