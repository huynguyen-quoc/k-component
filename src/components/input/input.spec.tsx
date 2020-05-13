import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import MocaInput, { MocaInputProps } from './input'
import '@testing-library/jest-dom/extend-expect'

describe('Input', () => {
  let props: MocaInputProps

  beforeEach(() => {
    props = {
      value: 'test',
      placeholder: 'input',
    }
  })
  const renderComponent = (): RenderResult => render(<MocaInput {...props} />)
  it('should render correctly with correct value', async () => {
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('input') as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe('test')
  })
})
