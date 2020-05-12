import Input from './input'
import TextArea from './textarea'

export { MocaInputProps } from './input'
export { MocaTextAreaProps } from './textarea'

type MocaInput = typeof Input
interface InputType extends MocaInput {
  TextArea: typeof TextArea
}
const MocaInput: InputType = Input as InputType

MocaInput.TextArea = TextArea
export default MocaInput
