import DatePicker from './date-picker'
import DateRangePicker from './range-picker'

export { MocaDateFormatType, MocaDatePickerProps } from './date-picker'
export { MocaDateRangePickerProps, MocaDateRangePlaceHolderType } from './range-picker'

type MocaDatePicker = typeof DatePicker
interface MocaDatePickerType extends MocaDatePicker {
  RangePicker: typeof DateRangePicker
}
const MocaDatePicker: MocaDatePickerType = DatePicker as MocaDatePickerType
MocaDatePicker.RangePicker = DateRangePicker
export default MocaDatePicker
