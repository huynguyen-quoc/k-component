import React, { forwardRef } from 'react'
import { InputNumber as AntInputNumber } from 'antd'
import { InputNumberProps } from 'antd/es/input-number'

export const MocaInputNumber = forwardRef<unknown, InputNumberProps>((props, ref) => (
  <AntInputNumber {...props} ref={ref} />
))

MocaInputNumber.displayName = 'MocaInputNumber'

export { InputNumberProps as MocaInputNumberProps }
export default MocaInputNumber
