import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Group, { MocaRadioGroupProps } from './group'
import '@testing-library/jest-dom/extend-expect'

describe('Select', () => {
  let props: MocaRadioGroupProps

  beforeEach(() => {
    props = {
      options: ['Jack', 'Ken'],
      value: 'Ken',
    }
  })

  const renderComponent = (): RenderResult => render(<Group {...props} />)
  it('should render correctly', async () => {
    const { getByDisplayValue } = renderComponent()

    const item: HTMLInputElement = getByDisplayValue('Ken') as HTMLInputElement
    expect(item.checked).toBeTruthy()
  })
})
