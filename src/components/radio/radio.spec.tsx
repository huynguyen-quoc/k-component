import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Radio, { MocaRadioProps } from './radio'
import '@testing-library/jest-dom/extend-expect'

describe('Select', () => {
  let props: MocaRadioProps

  beforeEach(() => {
    props = {
      checked: true,
    }
  })

  const renderComponent = (): RenderResult => render(<Radio {...props} />)
  it('should render correctly', async () => {
    const { getByRole } = renderComponent()

    const item: HTMLInputElement = getByRole('radio') as HTMLInputElement
    expect(item.checked).toBeTruthy()
  })
})
