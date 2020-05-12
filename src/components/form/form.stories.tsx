import React from 'react'
import MocaForm from './form'
import Item from './item'
import Input from '../input'
import Button from '../button'
import Checkbox from '../checkbox'
import { Row, Col } from 'antd'
import { action } from '@storybook/addon-actions'
export default {
  component: MocaForm,
  title: 'Components/MocaForm',
  subcomponents: { 'MocaForm.Item': Item },
}
export const basic = (): JSX.Element => (
  <MocaForm
    onFinish={(values): void => {
      action('form submitted')(values)
    }}
    layout="vertical"
  >
    <Item label="Input" name="input">
      <Input />
    </Item>
    <Item label="Checkbox" name="item-checkbox" valuePropName="checked">
      <Checkbox />
    </Item>
    <Row justify="end">
      <Col flex="0 1 auto">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Col>
    </Row>
  </MocaForm>
)
