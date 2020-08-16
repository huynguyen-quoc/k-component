import Radio from './radio'
import Group from './group'
import Button from './button'

type MocaRadio = typeof Radio
interface RadioType extends MocaRadio {
  Group: typeof Group
  Button: typeof Button
}
const MocaRadio: RadioType = Radio as RadioType
MocaRadio.Group = Group
MocaRadio.Button = Button

export { MocaRadioProps, MocaRadioChangeEvent } from './radio'
export { MocaRadioGroupProps, MocaRadioGroupButtonStyle, MocaRadioGroupOptionType } from './group'
export default MocaRadio
