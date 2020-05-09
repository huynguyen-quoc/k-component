import React, { forwardRef } from 'react'
import { Radio as AntRadio } from 'antd'
import { RadioProps } from 'antd/es/radio'

type Ref = HTMLElement & AntRadio

export const MocaRadio = forwardRef<Ref, RadioProps>((props, ref) => <AntRadio ref={ref} {...props} />)

MocaRadio.displayName = 'MocaRadio'

export default MocaRadio
