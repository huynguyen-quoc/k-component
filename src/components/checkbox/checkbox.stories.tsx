import React from 'react'
import MocaCheckbox from './checkbox'
import Group from './group'

export default {
  component: MocaCheckbox,
  title: 'MocaCheckbox',
  subcomponents: { 'MocaCheckbox.Group': Group },
}
const options = [
  { label: 'check box 1', value: 1 },
  { label: 'check box 2', value: 2 },
  { label: 'check box 3', value: 3 },
]
export const basic = (): JSX.Element => <MocaCheckbox>Basic</MocaCheckbox>
export const disabled = (): JSX.Element => <MocaCheckbox disabled>Disabled</MocaCheckbox>
export const checked = (): JSX.Element => <MocaCheckbox checked>Checked</MocaCheckbox>
export const group = (): JSX.Element => <Group options={options} />
