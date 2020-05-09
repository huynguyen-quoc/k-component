import React from 'react'
import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
  includeStories: [],
}

export const defaultView = () => <Button>Default</Button>
export const primaryView = () => <Button type="primary">Primary</Button>
export const dashView = () => <Button type="dashed">Dashed</Button>
export const linkView = () => <Button type="link">Link</Button>
