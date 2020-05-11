import React from 'react'
import Input from './input'

export default {
  title: 'Input',
  component: Input,
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
