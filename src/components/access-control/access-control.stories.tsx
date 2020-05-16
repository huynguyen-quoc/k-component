import React, { PureComponent } from 'react'
import MocaAccessControl from './access-control'
import MocaButton from '../button'
import MocaSpace from '../space'

export default {
  component: MocaAccessControl,
  title: 'Components/MocaAccessControl',
}
interface ModalState {
  permissions: string[]
  allowPermissions: string[]
}

class BasicModal extends PureComponent<unknown, ModalState> {
  constructor(props: unknown) {
    super(props)

    this.state = {
      permissions: ['allowed'],
      allowPermissions: ['allowed'],
    }
  }
  showContent: () => void = () => {
    this.setState({
      permissions: ['allowed'],
      allowPermissions: ['allowed'],
    })
  }
  hideContent: () => void = () => {
    this.setState({
      permissions: [],
    })
  }

  render(): JSX.Element {
    const { permissions, allowPermissions } = this.state
    return (
      <MocaSpace>
        {permissions.length > 0 && (
          <MocaButton type="primary" danger onClick={this.hideContent}>
            Hide Content
          </MocaButton>
        )}
        {!permissions.length && (
          <MocaButton type="primary" onClick={this.showContent}>
            Show Content
          </MocaButton>
        )}

        <MocaAccessControl permissions={permissions} allowPermissions={allowPermissions}>
          Basic
        </MocaAccessControl>
      </MocaSpace>
    )
  }
}
export const basic = (): JSX.Element => <BasicModal />
