import React, { forwardRef } from 'react'
import { Radio as AntRadio } from 'antd'
import { RadioProps, RadioGroupProps, RadioChangeEvent } from 'antd/es/radio'

type Ref = HTMLElement & AntRadio

export const MocaRadio = forwardRef<Ref, RadioProps>((props, ref) => <AntRadio ref={ref} {...props} />)

MocaRadio.displayName = 'MocaRadio'

export { RadioProps, RadioGroupProps, RadioChangeEvent }

type MocaRadio = typeof MocaRadio
interface Radio extends MocaRadio {
  Group: typeof AntRadio.Group
}
const Radio: Radio = MocaRadio as Radio

export const RadioGroup = AntRadio.Group
Radio.Group = RadioGroup

export default Radio
