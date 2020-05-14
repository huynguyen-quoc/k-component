import React, { FC } from 'react'
import { Divider as AntDivider } from 'antd'
import { DividerProps } from 'antd/es/divider'

export type MocaDividerProps = DividerProps

export const MocaDivider: FC<MocaDividerProps> = (props) => <AntDivider {...props} />

MocaDivider.displayName = 'MocaDivider'

export default MocaDivider
