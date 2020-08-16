import React, { forwardRef } from 'react'
import { Checkbox as AntCheckbox } from 'antd'

import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox'

export type MocaCheckboxRef = AntCheckbox

export type MocaCheckboxProps = Omit<CheckboxProps, ''>

export const MocaCheckbox = forwardRef<any, MocaCheckboxProps>((props, ref) => <AntCheckbox {...props} ref={ref} />)

MocaCheckbox.displayName = 'MocaCheckbox'

export { CheckboxChangeEvent as MocaCheckboxChangeEvent }
export default MocaCheckbox
