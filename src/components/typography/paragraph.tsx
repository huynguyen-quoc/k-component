import React, { FC } from 'react'
import { Typography as AntTypography } from 'antd'
import { TypographyProps } from 'antd/es/typography/Typography'
import { ParagraphProps } from 'antd/es/typography/Paragraph'

export type MocaTypographyParagraphProps = TypographyProps & ParagraphProps

const { Paragraph } = AntTypography

export const MocaParagraph: FC<MocaTypographyParagraphProps> = (props) => <Paragraph {...props} />

MocaParagraph.displayName = 'MocaParagraph'

export default MocaParagraph
