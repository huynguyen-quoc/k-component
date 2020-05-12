import React from 'react'
import MocaSelect from './select'
import Option from './option'

export default {
  component: MocaSelect,
  title: 'Components/MocaSelect',
  subcomponents: { 'MocaSelect.Option': Option },
}

export const basic = (): JSX.Element => (
  <MocaSelect style={{ width: 120 }}>
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
  </MocaSelect>
)
