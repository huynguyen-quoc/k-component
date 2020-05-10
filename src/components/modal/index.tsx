import React, { forwardRef, ReactNode } from 'react'
import { Modal as AntModal } from 'antd'
import { ModalFuncProps } from 'antd/es/modal'

export type MocaModalProps = ModalFuncProps & { children?: ReactNode }

export type MocaModal = MocaModalProps & any

export const MocaModal = forwardRef<MocaModal, MocaModalProps>((props, ref) => <AntModal ref={ref} {...props} />)

MocaModal.displayName = 'MocaModal'

export default MocaModal
