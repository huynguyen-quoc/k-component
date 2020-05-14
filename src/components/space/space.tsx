import React, { FC } from 'react'
import { Space as AntSpace } from 'antd'
import { SpaceProps } from 'antd/es/space'

export type MocaSpaceProps = SpaceProps

export const MocaSpace: FC<MocaSpaceProps> = (props) => <AntSpace {...props} />

MocaSpace.displayName = 'MocaSpace'

export default MocaSpace
