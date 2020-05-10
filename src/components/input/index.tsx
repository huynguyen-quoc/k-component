import React, { forwardRef } from 'react'
import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/es/input'

export type MocaInputRef = AntInput

export const MocaInput = forwardRef<MocaInputRef, InputProps>((props, ref) => <AntInput {...props} ref={ref} />)

MocaInput.displayName = 'MocaInput'

type MocaInput = typeof MocaInput
interface Input extends MocaInput {
  TextArea: typeof AntInput.TextArea
}
const Input: Input = MocaInput as Input

export const TextArea = AntInput.TextArea

Input.TextArea = TextArea
export { InputProps }
export default Input
