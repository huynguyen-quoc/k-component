import React, { FC } from 'react'
import { Form as AntForm } from 'antd'
import { FormItemProps as AntFormItemProps } from 'antd/es/form'

const itemHorizontalLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 16 },
  },
}

export interface MocaFormItemProps extends Omit<AntFormItemProps, 'labelCol' | 'wrapperCol'> {
  direction?: 'vertical' | 'horizontal'
}

export const MocaFormItem: FC<MocaFormItemProps> = ({ direction = 'vertical', ...rest }: MocaFormItemProps) => {
  const { labelCol, wrapperCol } = itemHorizontalLayout

  return (
    <AntForm.Item
      {...rest}
      labelCol={direction === 'horizontal' ? labelCol : undefined}
      wrapperCol={direction === 'horizontal' ? wrapperCol : undefined}
    />
  )
}

MocaFormItem.displayName = 'MocaFormItem'

export default MocaFormItem
