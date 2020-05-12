import Form, { useForm } from './form'
import FormItem from './item'

type MocaForm = typeof Form

interface FormType extends MocaForm {
  Item: typeof FormItem
  useForm: typeof useForm
}

const MocaForm: FormType = Form as FormType
MocaForm.Item = FormItem
MocaForm.useForm = useForm

export { MocaFormInstance, MocaFormProps } from './form'
export { MocaFormItemProps } from './item'

export default MocaForm
