import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './button'

export default {
  component: Button,
  title: 'Button',
}

export const basic = (): JSX.Element => <Button onClick={action('clicked')}>Basic</Button>
export const dashed = (): JSX.Element => (
  <Button type="dashed" onClick={action('clicked')}>
    Dashed
  </Button>
)
export const link = (): JSX.Element => (
  <Button type="link" onClick={action('clicked')}>
    Link
  </Button>
)
export const primary = (): JSX.Element => (
  <Button type="primary" onClick={action('clicked')}>
    Primary
  </Button>
)
