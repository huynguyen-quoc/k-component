import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Select, { MocaSelectProps } from './select'
import Option from './option'
import '@testing-library/jest-dom/extend-expect'

describe('Select', () => {
  let props: MocaSelectProps<string>

  beforeEach(() => {
    props = {
      defaultValue: 'Testing1',
    }
  })

  const renderComponent = (): RenderResult =>
    render(
      <Select {...props}>
        <Option value="Testing">Test</Option>
        <Option value="Testing1">Test 2</Option>
      </Select>,
    )
  it('should render correctly', async () => {
    const { container } = renderComponent()

    const selectedItem: HTMLDivElement = container.querySelector('.ant-select-selection-item') as HTMLDivElement
    expect(selectedItem.textContent).toBe('Test 2')
  })
})
