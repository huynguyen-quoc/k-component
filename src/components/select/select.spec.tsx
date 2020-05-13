import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Select, { MocaSelectProps } from './select'
import '@testing-library/jest-dom/extend-expect'

describe('Select', () => {
  let props: MocaSelectProps<number>

  const options = [{ value: 1, title: 'test' }]
  beforeEach(() => {
    props = {
      value: 1,
      options: options,
    }
  })

  const renderComponent = (): RenderResult => render(<Select {...props} />)
  it('should render correctly', async () => {
    const { getByText } = renderComponent()

    const item: HTMLElement = getByText('1') as HTMLElement
    expect(item).toBeInTheDocument()
  })
})
