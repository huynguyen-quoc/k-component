import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Title, { MocaTypographyTitleProps } from './title'
import '@testing-library/jest-dom/extend-expect'

describe('Text', () => {
  let props: MocaTypographyTitleProps

  beforeEach(() => {
    props = {
      children: 'Content Test',
    }
  })
  const renderComponent = (): RenderResult => render(<Title {...props} />)
  it('should render correctly', async () => {
    const { getByText } = renderComponent()

    const item: HTMLElement = getByText('Content Test')
    expect(item).toBeTruthy()
  })
})
