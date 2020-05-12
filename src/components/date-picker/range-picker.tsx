import React, { useState, forwardRef } from 'react'
import { Row, Col } from 'antd'
import moment, { Moment } from 'moment'
import DatePicker, { MocaDatePickerProps } from './date-picker'
import './range-picker.scss'

export type MocaDateRangePlaceHolderName = 'start' | 'end'

export type MocaDateRangePlaceHolderType = {
  [K in MocaDateRangePlaceHolderName]: string
}

export type MocaDateRangePickerProps = Omit<
  MocaDatePickerProps,
  'onChange' | 'placeholder' | 'value' | 'defaultValue'
> & {
  value?: string[] | Moment[] | null | undefined
  defaultValue?: string[] | Moment[] | null | undefined
  placeholder?: MocaDateRangePlaceHolderType
  onChange?: (value: Moment[] | null, dateStrings: string[]) => void
}

export const MocaDatePicker = forwardRef<any, MocaDateRangePickerProps>(
  (
    {
      format = 'date',
      formatType = { date: 'DD/MM/YYYY', dateTime: 'DD/MM/YYYY hh:mm:ss A' },
      defaultValue,
      placeholder = {
        start: 'Start Date',
        end: 'End Date',
      },
      onChange,
      value,
      ...rest
    }: MocaDateRangePickerProps,
    ref,
  ) => {
    const [startValue, setStartValue] = useState(value ? value[0] : null)
    const [endValue, setEndValue] = useState(value ? value[1] : null)

    const onValueChange = ({ type, changedValue }: any): void => {
      let startUpdatedValue: Moment = moment(startValue)
      let endUpdatedValue: Moment = moment(endValue)
      switch (type) {
        case 'start':
          startUpdatedValue = changedValue || null
          break
        case 'end':
          endUpdatedValue = changedValue || null
          break
        default:
          break
      }
      const isValidUpdatedValue = startUpdatedValue && endUpdatedValue && startUpdatedValue < endUpdatedValue
      if (!isValidUpdatedValue) {
        if (type === 'start' && endUpdatedValue) endUpdatedValue = startUpdatedValue
        if (type === 'end' && startUpdatedValue) startUpdatedValue = endUpdatedValue
      }

      setStartValue(startUpdatedValue)
      setEndValue(endUpdatedValue)
      if (onChange) {
        onChange([startUpdatedValue, endUpdatedValue], [startUpdatedValue.format(), endUpdatedValue.format()])
      }
    }
    return (
      <Row gutter={8} ref={ref} className="moca-range-picker">
        <Col span={12}>
          <DatePicker
            {...rest}
            placeholder={placeholder.start}
            formatType={formatType}
            format={format}
            onChange={(changedValue): void => {
              onValueChange({ type: 'start', changedValue })
            }}
            defaultValue={defaultValue && defaultValue[0]}
            value={startValue}
          />
        </Col>
        <Col span={12}>
          <DatePicker
            {...rest}
            placeholder={placeholder.end}
            formatType={formatType}
            format={format}
            onChange={(changedValue): void => {
              onValueChange({ type: 'end', changedValue })
            }}
            defaultValue={defaultValue && defaultValue[1]}
          />
        </Col>
      </Row>
    )
  },
)

MocaDatePicker.displayName = 'MocaDatePicker'

export default MocaDatePicker
