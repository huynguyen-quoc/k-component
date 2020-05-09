import React, { forwardRef } from 'react'
import { Form as AntForm } from 'antd'
import { FormProps, FormInstance } from 'antd/es/form'

type Ref = FormProps & FormInstance

const useForm = AntForm.useForm

export const MocaForm = forwardRef<Ref, FormProps>((props, ref) => <AntForm ref={ref} {...props} />)

MocaForm.displayName = 'MocaForm'

export { FormProps, FormInstance, useForm }

export default MocaForm
