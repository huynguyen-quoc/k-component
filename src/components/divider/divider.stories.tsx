import React from 'react'
import MocaInput from '../input'
import MocaDivider from './divider'

export default {
  title: 'Components/MocaDivider',
  component: MocaDivider,
}

export const basic = (): JSX.Element => (
  <>
    <MocaInput placeholder="Basic divider" />
    <MocaDivider />
    <MocaInput placeholder="Basic divider" />
  </>
)
