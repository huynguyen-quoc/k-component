import React from 'react'
import { Input } from '../index'

export default {
  title: 'Input',
  component: Input,
  includeStories: [],
}
type ViewProps = {}

export const defaultView: React.FC<ViewProps> = () => <Input />
export const textArea: React.FC<ViewProps> = () => <Input.TextArea rows={10} />
