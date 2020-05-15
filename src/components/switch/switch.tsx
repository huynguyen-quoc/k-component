import React, { forwardRef } from 'react'
import { Switch as AntSwitch } from 'antd'
import { SwitchProps } from 'antd/es/switch'

export type MocaSwitchProps = SwitchProps

export const MocaSwitch = forwardRef<any, MocaSwitchProps>((props, ref) => <AntSwitch ref={ref} {...props} />)

MocaSwitch.displayName = 'MocaSwitch'

export default MocaSwitch
