import React from 'react'
import { Select as AntSelect } from 'antd'
import { SelectProps, SelectValue } from 'antd/es/select'

export type MocaSelectProps<T> = SelectProps<T>

export const MocaSelect = <T extends SelectValue>(props: MocaSelectProps<T>): JSX.Element => {
  return <AntSelect<T> {...props} />
}

MocaSelect.displayName = 'MocaSelect'

export { SelectValue as MocaSelectValue }
export default MocaSelect
