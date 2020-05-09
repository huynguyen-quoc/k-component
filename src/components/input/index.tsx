import React, { forwardRef } from 'react'
import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/es/input'

type Ref = AntInput

export const MocaInput = forwardRef<Ref, InputProps>((props, ref) => <AntInput {...props} ref={ref} />)

MocaInput.displayName = 'MocaInput'

export default MocaInput
