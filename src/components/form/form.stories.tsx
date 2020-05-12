import React from 'react'
import MocaForm from './form'
import Item from './item'
import MocaInput from '../input'
import MocaButton from '../button'
import MocaCheckbox from '../checkbox'
import MocaDatePicker from '../date-picker'
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
    <Item label="Input" name="input-value">
      <MocaInput />
    </Item>
    <Item label="Checkbox" name="item-checkbox" valuePropName="checked">
      <MocaCheckbox />
    </Item>
    <Item label="DatePicker" name="date-value">
      <MocaDatePicker />
    </Item>
    <Item label="DatePicker" name="date-values">
      <MocaDatePicker.RangePicker />
    </Item>
    <Row justify="end">
      <Col flex="0 1 auto">
        <MocaButton type="primary" htmlType="submit">
          Submit
        </MocaButton>
      </Col>
    </Row>
  </MocaForm>
)
