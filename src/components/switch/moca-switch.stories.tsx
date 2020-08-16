import React from 'react'
import MocaSwitch from './moca-switch'

export default {
  component: MocaSwitch,
  title: 'Components/MocaSwitch',
}

export const basic = (): JSX.Element => <MocaSwitch />
export const checked = (): JSX.Element => <MocaSwitch defaultChecked />
