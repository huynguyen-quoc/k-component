import React from 'react'
import { Checkbox } from '../index'

export default {
  title: 'Checkbox',
  component: Checkbox,
  includeStories: [],
}

const options = [
  { label: 'check box 1', value: 1 },
  { label: 'check box 2', value: 2 },
  { label: 'check box 3', value: 3 },
]
export const defaultCheckBox = () => <Checkbox />
export const group = () => <Checkbox.Group options={options} />
export const checked = () => <Checkbox checked />
