import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Modal, { MocaModalProps } from './modal'
import '@testing-library/jest-dom/extend-expect'

describe('Modal', () => {
  let props: MocaModalProps

  beforeEach(() => {
    props = {
      visible: true,
    }
  })

  const renderComponent = (): RenderResult =>
    render(
      <Modal {...props}>
        <div data-testid="test">Test Modal</div>
      </Modal>,
    )
  it('should render correctly', async () => {
    const { getByText } = renderComponent()

    const selectedItem: HTMLDivElement = getByText('Test Modal') as HTMLDivElement
    expect(selectedItem).toBeTruthy()
  })
})
