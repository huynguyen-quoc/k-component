import React from 'react'
import Checkbox from './checkbox'
import Group from './group'

export default {
  component: Checkbox,
  title: 'Checkbox',
}
const options = [
  { label: 'check box 1', value: 1 },
  { label: 'check box 2', value: 2 },
  { label: 'check box 3', value: 3 },
]
export const basic = (): JSX.Element => <Checkbox>Basic</Checkbox>
export const disabled = (): JSX.Element => <Checkbox disabled>Disabled</Checkbox>
export const checked = (): JSX.Element => <Checkbox checked>Checked</Checkbox>
export const group = (): JSX.Element => <Group options={options} />
