import React, { forwardRef } from 'react'
import { DatePicker as AntDatePicker } from 'antd'
import moment, { Moment } from 'moment'
import { DatePickerProps } from 'antd/es/date-picker'
export type MocaFormatTypeName = 'date' | 'dateTime'

export type MocaDateFormatType = {
  [K in MocaFormatTypeName]: string
}
export type MocaDatePickerProps = Omit<DatePickerProps, 'format' | 'value' | 'defaultValue' | 'picker'> & {
  format?: string
  value?: string | Moment | null | undefined
  defaultValue?: string | Moment | null | undefined
  formatType?: MocaDateFormatType
}

const setValue = (value?: string | undefined | null | Moment): Moment | undefined => {
  if (!value) return undefined
  const dateMoment = moment(value)
  return (dateMoment.isValid() && dateMoment) || undefined
}

export const MocaDatePicker = forwardRef<any, MocaDatePickerProps>(
  (
    {
      format = 'date',
      formatType = { date: 'DD/MM/YYYY', dateTime: 'DD/MM/YYYY hh:mm:ss A' },
      defaultValue,
      value,
      ...rest
    }: MocaDatePickerProps,
    ref,
  ) => {
    const dateFormat = formatType[format]
    return (
      <AntDatePicker
        picker="date"
        {...rest}
        value={setValue(value)}
        defaultValue={setValue(defaultValue)}
        format={dateFormat}
        ref={ref}
      />
    )
  },
)

MocaDatePicker.displayName = 'MocaDatePicker'

export default MocaDatePicker
