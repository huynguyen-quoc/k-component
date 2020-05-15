import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Switch, { MocaSwitchProps } from './switch'
import '@testing-library/jest-dom/extend-expect'

describe('Input', () => {
  let props: MocaSwitchProps

  beforeEach(() => {
    props = {}
  })
  const renderComponent = (): RenderResult => render(<Switch {...props} />)
  it('should render correctly', async () => {
    const { getByRole } = renderComponent()

    const item: HTMLButtonElement = getByRole('switch') as HTMLButtonElement
    expect(item).toBeInTheDocument()
  })
})
