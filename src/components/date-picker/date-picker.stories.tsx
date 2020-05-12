import React from 'react'
import MocaDatePicker from './date-picker'
import RangePicker from './range-picker'

export default {
  component: MocaDatePicker,
  title: 'Components/MocaDatePicker',
  subcomponents: { 'MocaDatePicker.RangePicker': RangePicker },
}
export const basic = (): JSX.Element => <MocaDatePicker />
export const dateTimeFormat = (): JSX.Element => <MocaDatePicker format="dateTime" />
export const dateRange = (): JSX.Element => (
  <RangePicker placeholder={{ start: 'Start Date', end: 'End Date' }} format="dateTime" />
)
