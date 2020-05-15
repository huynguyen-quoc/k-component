import React from 'react'
import MocaSwitch from './switch'

export default {
  component: MocaSwitch,
  title: 'Components/MocaSwitch',
}

export const basic = (): JSX.Element => <MocaSwitch />
export const checked = (): JSX.Element => <MocaSwitch defaultChecked />
