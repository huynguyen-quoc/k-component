import Checkbox from './checkbox'
import Group from './group'

export { MocaCheckboxProps, MocaCheckboxChangeEvent } from './checkbox'
export { MocaCheckboxGroupProps } from './group'

type MocaCheckbox = typeof Checkbox
interface CheckboxType extends MocaCheckbox {
  Group: typeof Group
}
const MocaCheckbox: CheckboxType = Checkbox as CheckboxType

export const CheckboxGroup = Group
MocaCheckbox.Group = Group
export default MocaCheckbox
