import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Checkbox, { MocaCheckboxProps } from './checkbox'
import '@testing-library/jest-dom/extend-expect'

describe('CheckBox', () => {
  let props: MocaCheckboxProps

  beforeEach(() => {
    props = {
      checked: true,
    }
  })
  const renderComponent = (): RenderResult => render(<Checkbox {...props} />)
  it('should render correctly with state checked', async () => {
    const { getByRole } = renderComponent()

    const item = getByRole('checkbox')
    expect(item).toBeInTheDocument()
    expect(item).toHaveClass('ant-checkbox-input')
    expect(item).toBeChecked()
  })
})
