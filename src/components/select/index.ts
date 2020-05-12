import Select from './select'
import Option from './option'

type MocaSelect = typeof Select
interface SelectType extends MocaSelect {
  Option: typeof Option
}
const MocaSelect: SelectType = Select as SelectType
MocaSelect.Option = Option

export { MocaSelectProps, MocaSelectValue } from './select'
export { MocaOptionType } from './option'

export default MocaSelect
