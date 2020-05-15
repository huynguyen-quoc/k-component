import React, { forwardRef } from 'react'
import { Card as AntCard } from 'antd'
import { CardProps } from 'antd/es/card'

export type MocaCardProps = CardProps

export const MocaCard = forwardRef<any, MocaCardProps>((props, ref) => <AntCard {...props} ref={ref} />)

MocaCard.displayName = 'MocaCard'

export default MocaCard
