import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Paragraph, { MocaTypographyParagraphProps } from './paragraph'
import '@testing-library/jest-dom/extend-expect'

describe('Paragraph', () => {
  let props: MocaTypographyParagraphProps

  beforeEach(() => {
    props = {
      children: 'Content Test',
    }
  })
  const renderComponent = (): RenderResult => render(<Paragraph {...props} />)
  it('should render correctly', async () => {
    const { getByText } = renderComponent()

    const item: HTMLElement = getByText('Content Test')
    expect(item).toBeTruthy()
  })
})
