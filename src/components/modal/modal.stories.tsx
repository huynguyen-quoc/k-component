import React, { PureComponent, MouseEvent } from 'react'
import MocaModal from './modal'
import { Button } from 'antd'

export default {
  component: MocaModal,
  title: 'Components/MocaModal',
}
interface ModalState {
  visible: boolean
}

class BasicModal extends PureComponent<unknown, ModalState> {
  constructor(props: unknown) {
    super(props)

    this.state = {
      visible: false,
    }
  }
  showModal: () => void = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk: (e: MouseEvent<HTMLElement>) => void = (e: MouseEvent<HTMLElement>) => {
    this.setState({
      visible: false,
    })
  }

  handleCancel: (e: MouseEvent<HTMLElement>) => void = (e: MouseEvent<HTMLElement>) => {
    this.setState({
      visible: false,
    })
  }

  render(): JSX.Element {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <MocaModal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </MocaModal>
      </div>
    )
  }
}
export const defaultView = (): JSX.Element => <BasicModal />
