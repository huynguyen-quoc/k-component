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
  value?: string[] | Moment[] | undefined
  defaultValue?: string[] | Moment[] | undefined
  placeholder?: MocaDateRangePlaceHolderType
  onChange?: (value: (Moment | null)[] | undefined | null, dateStrings: (string | null)[]) => void
}

interface ValueChangeType {
  type: string
  changedValue: Moment | null | undefined
}
type RangePickerValue = string | Moment | undefined | null

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
    const [startValue, setStartValue] = useState<RangePickerValue>(value ? value[0] : null)
    const [endValue, setEndValue] = useState<RangePickerValue>(value ? value[1] : null)

    const onValueChange = ({ type, changedValue }: ValueChangeType): void => {
      let _startValue: Moment | null | undefined = moment(startValue)
      let _endValue: Moment | null | undefined = moment(endValue)
      switch (type) {
        case 'start':
          _startValue = changedValue
          break
        default:
          _endValue = changedValue
          break
      }
      const validEndDate = _endValue && _endValue.isValid()
      const validStartDate = _startValue && _startValue.isValid()
      const startBeforeEnd = _startValue! < _endValue!

      if (validStartDate && validEndDate && !startBeforeEnd) {
        if (type === 'start') _endValue = _startValue
        if (type === 'end') _startValue = _endValue
      }

      setStartValue(_startValue)
      setEndValue(_endValue)
      if (onChange && validStartDate && validEndDate) {
        onChange([_startValue!, _endValue!], [_startValue!.format(), _endValue!.format()])
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
            value={endValue}
          />
        </Col>
      </Row>
    )
  },
)

MocaDatePicker.displayName = 'MocaDatePicker'

export default MocaDatePicker
