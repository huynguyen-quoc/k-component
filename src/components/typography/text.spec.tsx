import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Text, { MocaTypographyTextProps } from './text'
import '@testing-library/jest-dom/extend-expect'

describe('Text', () => {
  let props: MocaTypographyTextProps

  beforeEach(() => {
    props = {
      children: 'Content Test',
    }
  })
  const renderComponent = (): RenderResult => render(<Text {...props} />)
  it('should render correctly', async () => {
    const { getByText } = renderComponent()

    const item: HTMLElement = getByText('Content Test')
    expect(item).toBeTruthy()
  })
})
