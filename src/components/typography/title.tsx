import React, { FC } from 'react'
import { Typography as AntTypography } from 'antd'
import { TypographyProps } from 'antd/es/typography/Typography'
import { TitleProps } from 'antd/es/typography/Title'

export type MocaTypographyTitleProps = TypographyProps & TitleProps

const { Title } = AntTypography

export const MocaTitle: FC<MocaTypographyTitleProps> = (props) => <Title {...props} />

MocaTitle.displayName = 'MocaTitle'

export default MocaTitle
