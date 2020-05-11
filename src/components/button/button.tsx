import React, { forwardRef } from 'react'
import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/es/button'

export type MocaButtonProps = ButtonProps

export const MocaButton = forwardRef<HTMLElement, MocaButtonProps>((props: MocaButtonProps, ref) => (
  <AntButton ref={ref} {...props} />
))

MocaButton.displayName = 'MocaButton'

export default MocaButton
