import React, { forwardRef } from 'react'
import { Radio as AntRadio } from 'antd'
import { RadioProps, RadioChangeEvent } from 'antd/es/radio'

export type MocaRadioType = RadioProps & HTMLElement

export const MocaRadio = forwardRef<MocaRadioType, RadioProps>((props, ref) => <AntRadio ref={ref} {...props} />)

MocaRadio.displayName = 'MocaRadio'

export { RadioProps as MocaRadioProps, RadioChangeEvent as MocaRadioChangeEvent }

export default MocaRadio
