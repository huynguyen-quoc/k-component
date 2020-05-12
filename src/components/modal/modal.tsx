import React, { FC, PropsWithChildren } from 'react'
import { Modal as AntModal } from 'antd'
import { ModalFuncProps, ModalProps } from 'antd/es/modal'

export type MocaModalProps = PropsWithChildren<ModalFuncProps>

export const MocaModal: FC<MocaModalProps> = (props) => <AntModal {...props} />

MocaModal.displayName = 'MocaModal'

export { ModalProps, ModalFuncProps }

export default MocaModal
