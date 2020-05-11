import React, { forwardRef } from 'react'
import { Checkbox as AntCheckbox } from 'antd'

import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox'

export type MocaCheckboxRef = AntCheckbox

export const MocaCheckbox = forwardRef<any, CheckboxProps>((props, ref) => <AntCheckbox {...props} ref={ref} />)

MocaCheckbox.displayName = 'MocaCheckbox'

export { CheckboxProps as MocaCheckboxProps, CheckboxChangeEvent as MocaCheckboxChangeEvent }
export default MocaCheckbox
