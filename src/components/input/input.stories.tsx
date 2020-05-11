import React from 'react'
import MocaInput from './input'
import TextArea from './textarea'

export default {
  title: 'MocaInput',
  component: MocaInput,
  subcomponents: { MocaTextArea: TextArea },
}

export const basic = (): JSX.Element => <MocaInput placeholder="Basic" />
export const threeSizeInput = (): JSX.Element => (
  <>
    <MocaInput placeholder="Default MocaInput" />
    <br />
    <br />
    <MocaInput placeholder="Large MocaInput" size="large" />
    <br />
    <br />
    <MocaInput placeholder="Small MocaInput" size="small" />
  </>
)
export const textarea = (): JSX.Element => <TextArea placeholder="Text area" />
