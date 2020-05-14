import React from 'react'
import MocaButton from '../button'
import MocaSpace from './space'

export default {
  component: MocaSpace,
  title: 'Components/MocaSpace',
}

export const basic = (): JSX.Element => (
  <MocaSpace>
    <MocaButton>Default</MocaButton>
    <MocaButton type="link">Link</MocaButton>
  </MocaSpace>
)
