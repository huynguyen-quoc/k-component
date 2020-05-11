import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Group, { MocaCheckboxGroupProps, MocaCheckboxOptionType } from './group'
import '@testing-library/jest-dom/extend-expect'

describe('CheckBox', () => {
  let props: MocaCheckboxGroupProps
  const options: MocaCheckboxOptionType[] = [
    { label: 'checkbox 1', value: 1 },
    { label: 'checkbox 2', value: 2 },
    { label: 'checkbox 3', value: 3 },
  ]

  beforeEach(() => {
    props = {
      value: [1],
      options: options,
    }
  })
  const renderComponent = (): RenderResult => render(<Group {...props} />)
  it('should render correctly with item checked', async () => {
    const { getAllByRole } = renderComponent()

    const items = getAllByRole('checkbox')
    expect(items.length).toEqual(3)
    expect(items[0]).toBeChecked()
  })
})
