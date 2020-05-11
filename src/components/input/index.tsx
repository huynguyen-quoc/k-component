import Input from './input'
import TextArea from './textarea'

type MocaInput = typeof Input
interface InputType extends MocaInput {
  TextArea: typeof TextArea
}
const MocaInput: InputType = Input as InputType

MocaInput.TextArea = TextArea
export default MocaInput
