import React from 'react'
import Input from './input'
import TextArea from './textarea'

export default {
  title: 'Input',
  component: Input,
  subcomponents: { MocaTextArea: TextArea },
}

export const basic = (): JSX.Element => <Input placeholder="Basic" />
export const threeSizeInput = (): JSX.Element => (
  <>
    <Input placeholder="Default Input" />
    <br />
    <br />
    <Input placeholder="Large Input" size="large" />
    <br />
    <br />
    <Input placeholder="Small Input" size="small" />
  </>
)
export const textarea = (): JSX.Element => <TextArea placeholder="Text area" />
