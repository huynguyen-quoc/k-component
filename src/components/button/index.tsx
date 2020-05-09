import React, { forwardRef } from 'react'
import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/es/button'

type Ref = HTMLElement & ButtonProps

export const MocaButton = forwardRef<Ref, ButtonProps>((props, ref) => <AntButton ref={ref} {...props} />)

MocaButton.displayName = 'MocaButton'

export default MocaButton
