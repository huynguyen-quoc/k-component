import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import InputNumber, { MocaInputNumberProps } from './input-number'
import '@testing-library/jest-dom/extend-expect'

describe('Input Number', () => {
  let props: MocaInputNumberProps

  beforeEach(() => {
    props = {
      value: 10.0,
      placeholder: 'input',
    }
  })
  const renderComponent = (): RenderResult => render(<InputNumber {...props} />)
  it('should render correctly with correct value', async () => {
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('input') as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe('10')
  })
})
