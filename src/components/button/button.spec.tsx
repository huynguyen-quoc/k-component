import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Button, { MocaButtonProps } from './button'
import '@testing-library/jest-dom/extend-expect'

describe('Button', () => {
  let props: MocaButtonProps

  beforeEach(() => {
    props = {
      type: 'primary',
    }
  })
  const renderComponent = (): RenderResult => render(<Button {...props}>Button</Button>)
  it('should render correctly with primary className', async () => {
    const { getByRole } = renderComponent()

    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('ant-btn-primary')
  })
})
