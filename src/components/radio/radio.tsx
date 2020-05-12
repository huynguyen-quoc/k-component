import React, { forwardRef } from 'react'
import { Radio as AntRadio } from 'antd'
import { RadioProps, RadioChangeEvent } from 'antd/es/radio'

export const MocaRadio = forwardRef<AntRadio, RadioProps>((props, ref) => <AntRadio ref={ref} {...props} />)

MocaRadio.displayName = 'MocaRadio'

export { RadioProps as MocaRadioProps, RadioChangeEvent as MocaRadioChangeEvent }

export default MocaRadio
