import React, { FC } from 'react'
import { Card as AntCard } from 'antd'
import { CardProps } from 'antd/es/card'

export type MocaCardProps = CardProps

export const MocaCard: FC<CardProps> = (props: CardProps) => <AntCard {...props} />

MocaCard.displayName = 'MocaCard'

export default MocaCard
