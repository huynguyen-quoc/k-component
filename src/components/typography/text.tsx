import React, { FC } from 'react'
import { Typography as AntTypography } from 'antd'
import { TypographyProps } from 'antd/es/typography/Typography'
import { TextProps } from 'antd/es/typography/Text'

export type MocaTypographyTextProps = TypographyProps & TextProps

const { Text } = AntTypography

export const MocaText: FC<MocaTypographyTextProps> = (props) => <Text {...props} />

MocaText.displayName = 'MocaText'

export default MocaText
