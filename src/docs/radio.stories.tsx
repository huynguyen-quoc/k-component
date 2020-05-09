import React from 'react'
import { Radio } from '../index'

export default {
  title: 'Radio',
  component: Radio,
  includeStories: [],
}

const options = [
  { label: 'radio 1', value: 1 },
  { label: 'radio 2', value: 2 },
  { label: 'radio 3', value: 3 },
]
export const defaultView = () => <Radio />
export const group = () => <Radio.Group options={options} />
export const checked = () => <Radio checked />
