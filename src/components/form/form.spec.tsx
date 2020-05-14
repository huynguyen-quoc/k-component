import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Form, { MocaFormProps } from './form'
import Item from './item'
import '@testing-library/jest-dom/extend-expect'

describe('Modal', () => {
  let props: MocaFormProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = (): RenderResult =>
    render(
      <Form {...props}>
        <Item direction="horizontal" name="test">
          <input type="text" />
        </Item>
        <Item direction="vertical" name="test">
          <input type="checkbox" />
        </Item>
        <Item name="test">
          <input type="button" />
        </Item>
      </Form>,
    )
  it('should render correctly', async () => {
    const { getByRole, container } = renderComponent()

    const inputItem: HTMLInputElement = getByRole('textbox') as HTMLInputElement
    expect(inputItem).toBeInTheDocument()
    const buttonItem: HTMLElement = getByRole('button') as HTMLElement
    expect(buttonItem).toBeInTheDocument()
    const checkItem: HTMLInputElement = getByRole('checkbox') as HTMLInputElement
    expect(checkItem).toBeInTheDocument()
    const formItem: HTMLElement = container.querySelector('.ant-form-horizontal') as HTMLElement
    expect(formItem).toBeInTheDocument()
  })
})
