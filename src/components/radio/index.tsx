import Radio from './radio'
import Group from './group'

type MocaRadio = typeof Radio
interface RadioType extends MocaRadio {
  Group: typeof Group
}
const MocaRadio: RadioType = Radio as RadioType
MocaRadio.Group = Group

export { MocaRadioProps, MocaRadioChangeEvent } from './radio'
export { MocaRadioGroupProps } from './group'
export default MocaRadio
