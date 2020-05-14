import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import MocaDivider, { MocaDividerProps } from './divider'
import '@testing-library/jest-dom/extend-expect'

describe('Input', () => {
  let props: MocaDividerProps

  beforeEach(() => {
    props = {}
  })
  const renderComponent = (): RenderResult => render(<MocaDivider {...props} />)
  it('should render correctly', async () => {
    const { container } = renderComponent()

    const item: HTMLDivElement = container.querySelector('.ant-divider') as HTMLDivElement
    expect(item).toBeInTheDocument()
  })
})
