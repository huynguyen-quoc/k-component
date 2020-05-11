import React, { forwardRef } from 'react'
import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/es/input'

export const MocaInput = forwardRef<AntInput, InputProps>((props, ref) => <AntInput {...props} ref={ref} />)

MocaInput.displayName = 'MocaInput'

export { InputProps as MocaInputProps }
export default MocaInput
