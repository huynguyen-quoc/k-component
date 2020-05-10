import React, { PureComponent, MouseEvent } from 'react'
import { Modal, Button } from '../index'

export default {
  title: 'Modal',
  component: Modal,
  includeStories: [],
}

interface ModalState {
  visible: boolean
}

class BasicModal extends PureComponent<{}, ModalState> {
  constructor(props: any) {
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
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel: (e: MouseEvent<HTMLElement>) => void = (e: MouseEvent<HTMLElement>) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
export const defaultView = () => <BasicModal />
