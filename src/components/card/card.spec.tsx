import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Card, { MocaCardProps } from './card'
import '@testing-library/jest-dom/extend-expect'

describe('CheckBox', () => {
  let props: MocaCardProps

  beforeEach(() => {
    props = {}
  })
  const renderComponent = (): RenderResult =>
    render(
      <Card {...props}>
        <p>test</p>
        <p>test 2</p>
      </Card>,
    )
  it('should render correctly', async () => {
    const { container } = renderComponent()

    const item: HTMLDivElement = container.querySelector('.ant-card-body') as HTMLDivElement
    expect(item).toBeInTheDocument()
  })
})
