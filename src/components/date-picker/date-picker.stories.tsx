import React from 'react'
import MocaDatePicker from './date-picker'

export default {
  component: MocaDatePicker,
  title: 'MocaDatePicker',
}

export const basic = (): JSX.Element => <MocaDatePicker />
export const dateTimeFormat = (): JSX.Element => <MocaDatePicker format="dateTime" />
