import React, { FC } from 'react'
import { render, RenderResult } from '@testing-library/react'
import withLoading, { WithLoadingProps } from './with-loading'
import '@testing-library/jest-dom/extend-expect'

describe('WithLoading', () => {
  let props: WithLoadingProps

  beforeEach(() => {
    props = {
      loading: true,
    }
  })
  it('should render correctly with loading true', async () => {
    const TestComponent: FC<any> = () => <input type="text" placeholder="test" />
    const Component = withLoading(props)<{}>(TestComponent)
    const renderComponent = (): RenderResult => render(<Component />)
    const { queryAllByPlaceholderText, container } = renderComponent()

    const items = queryAllByPlaceholderText('test')
    expect(items.length).toBe(0)
    const item: HTMLDivElement = container.querySelector('.ant-skeleton') as HTMLDivElement
    expect(item).toBeInTheDocument()
  })

  it('should render correctly with loading false', async () => {
    props.loading = false
    const TestComponent: FC<any> = () => <input type="text" placeholder="test" />
    const Component = withLoading(props)<{}>(TestComponent)
    const renderComponent = (): RenderResult => render(<Component />)
    const { getByPlaceholderText, container } = renderComponent()

    const inputItem = getByPlaceholderText('test')
    expect(inputItem).toBeTruthy()
    const item: HTMLDivElement = container.querySelector('.ant-skeleton') as HTMLDivElement
    expect(item).not.toBeInTheDocument()
  })

  it('should render correctly with loading false and contain error', async () => {
    props.loading = false
    props.error = { message: 'Error message' }
    const TestComponent: FC<any> = () => <input type="text" placeholder="test" />
    const Component = withLoading(props)<{}>(TestComponent)
    const renderComponent = (): RenderResult => render(<Component />)
    const { getByText, container, queryByPlaceholderText } = renderComponent()

    const errorMessageItem = getByText('Error message')
    expect(errorMessageItem).toBeTruthy()
    const inputItems = queryByPlaceholderText('test')
    expect(inputItems).toBeFalsy()
    const item: HTMLDivElement = container.querySelector('.ant-skeleton') as HTMLDivElement
    expect(item).not.toBeInTheDocument()
  })
})
