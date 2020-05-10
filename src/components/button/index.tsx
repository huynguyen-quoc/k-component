import React, { forwardRef } from 'react'
import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/es/button'

export type MocaButtonRef = typeof AntButton & HTMLElement

export type MocaButtonProps = ButtonProps

export const MocaButton = forwardRef<MocaButtonRef, MocaButtonProps>((props, ref) => <AntButton ref={ref} {...props} />)

MocaButton.displayName = 'MocaButton'

export default MocaButton
