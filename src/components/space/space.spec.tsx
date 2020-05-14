import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import MocaSpace, { MocaSpaceProps } from './space'
import '@testing-library/jest-dom/extend-expect'

describe('Input', () => {
  let props: MocaSpaceProps

  beforeEach(() => {
    props = {}
  })
  const renderComponent = (): RenderResult =>
    render(
      <MocaSpace {...props}>
        <input />
        <input />
      </MocaSpace>,
    )
  it('should render correctly', async () => {
    const { container } = renderComponent()

    const item: HTMLDivElement = container.querySelector('.ant-space') as HTMLDivElement
    expect(item).toBeInTheDocument()
  })
})
