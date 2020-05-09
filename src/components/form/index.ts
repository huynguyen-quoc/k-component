import MocaForm, { FormProps, FormInstance, useForm } from './form'
import MocaFormItem, { FormItemProps } from './item'

type MocaForm = typeof MocaForm

interface Form extends MocaForm {
  Item: typeof MocaFormItem
  useForm: typeof useForm
}

const Form: Form = MocaForm as Form
Form.Item = MocaFormItem
Form.useForm = useForm

export { FormInstance, FormProps, FormItemProps }

export default Form
