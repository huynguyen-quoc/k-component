import React, { forwardRef } from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps } from 'antd/es/checkbox'

type Ref = AntCheckbox

export const MocaCheckbox = forwardRef<Ref, CheckboxProps>((props, ref) => <AntCheckbox {...props} ref={ref} />)

MocaCheckbox.displayName = 'MocaCheckbox'

export default MocaCheckbox
