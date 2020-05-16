import React from 'react'
import MocaSpace from '../space'
import MocaTypography from './index'

export default {
  title: 'Components/MocaTypography',
  component: MocaTypography.Text,
  subcomponents: {
    Title: MocaTypography.Title,
    Paragraph: MocaTypography.Paragraph,
  },
}

export const text = (): JSX.Element => (
  <MocaSpace direction="vertical">
    <MocaTypography.Text>Text</MocaTypography.Text>
    <MocaTypography.Text type="secondary">Text</MocaTypography.Text>
    <MocaTypography.Text type="warning">Text</MocaTypography.Text>
  </MocaSpace>
)
export const title = (): JSX.Element => (
  <MocaSpace direction="vertical">
    <MocaTypography.Title>Title</MocaTypography.Title>
    <MocaTypography.Title level={2}>Title</MocaTypography.Title>
    <MocaTypography.Title level={3}>Title</MocaTypography.Title>
  </MocaSpace>
)
export const paragraph = (): JSX.Element => (
  <MocaSpace direction="vertical">
    <MocaTypography.Paragraph>Paragraph Text</MocaTypography.Paragraph>
  </MocaSpace>
)
