import React from 'react'
import MocaRadio from './radio'
import Group from './group'

export default {
  component: MocaRadio,
  title: 'Components/MocaRadio',
  subcomponents: { 'MocaRadio.Group': Group },
}
const options = [
  { label: 'Radio 1', value: 1 },
  { label: 'Radio 2', value: 2 },
  { label: 'Radio 3', value: 3 },
]
export const basic = (): JSX.Element => <MocaRadio>Basic</MocaRadio>
export const disabled = (): JSX.Element => <MocaRadio disabled>Disabled</MocaRadio>
export const checked = (): JSX.Element => <MocaRadio checked>Checked</MocaRadio>
export const group = (): JSX.Element => <Group options={options} />
