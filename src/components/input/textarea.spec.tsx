import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import TextArea, { MocaTextAreaProps } from './textarea'
import '@testing-library/jest-dom/extend-expect'

describe('TextArea', () => {
  let props: MocaTextAreaProps

  beforeEach(() => {
    props = {
      value: 'test',
      placeholder: 'input',
    }
  })
  const renderComponent = (): RenderResult => render(<TextArea {...props} />)
  it('should render correctly with correct value', async () => {
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('input') as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe('test')
  })
})
