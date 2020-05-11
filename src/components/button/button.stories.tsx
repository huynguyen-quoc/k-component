import React from 'react'
import { action } from '@storybook/addon-actions'
import MocaButton from './button'

export default {
  component: MocaButton,
  title: 'MocaButton',
}

export const basic = (): JSX.Element => <MocaButton onClick={action('clicked')}>Basic</MocaButton>
export const dashed = (): JSX.Element => (
  <MocaButton type="dashed" onClick={action('clicked')}>
    Dashed
  </MocaButton>
)
export const link = (): JSX.Element => (
  <MocaButton type="link" onClick={action('clicked')}>
    Link
  </MocaButton>
)
export const primary = (): JSX.Element => (
  <MocaButton type="primary" onClick={action('clicked')}>
    Primary
  </MocaButton>
)
