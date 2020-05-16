import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import AccessControl, { MocaAccessControlProps } from './access-control'
import '@testing-library/jest-dom/extend-expect'

describe('CheckBox', () => {
  let props: MocaAccessControlProps

  beforeEach(() => {
    props = {
      type: 'some',
      permissions: ['permission', 'permission_second'],
      allowPermissions: ['permission', 'permission_second'],
    }
  })
  const renderComponent = (): RenderResult =>
    render(
      <AccessControl {...props}>
        <input type="text" placeholder="test" />
      </AccessControl>,
    )
  it('should render correctly with correct permissions', async () => {
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('test') as HTMLInputElement
    expect(item).toBeInTheDocument()
  })
  it('should render correctly with correct permissions and type every', async () => {
    props.type = 'every'
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('test') as HTMLInputElement
    expect(item).toBeInTheDocument()
  })
  it('should render correctly with empty allow permission', async () => {
    props.type = undefined
    props.allowPermissions = undefined
    props.permissions = undefined
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('test') as HTMLInputElement
    expect(item).toBeInTheDocument()
  })

  it('should render correctly with access check is false', async () => {
    props.accessCheck = (): boolean => {
      return false
    }
    const { queryAllByPlaceholderText } = renderComponent()

    const items = queryAllByPlaceholderText('test')
    expect(items.length).toBe(0)
  })

  it('should render correctly without permissions and type every', async () => {
    props.type = 'every'
    props.permissions = ['permission']
    const { queryAllByPlaceholderText } = renderComponent()

    const items = queryAllByPlaceholderText('test')
    expect(items.length).toBe(0)
  })
  it('should render correctly without permissions', async () => {
    props.permissions = []
    const { queryAllByPlaceholderText } = renderComponent()

    const items = queryAllByPlaceholderText('test')
    expect(items.length).toBe(0)
  })

  it('should render correctly without permissions and custom render no access', async () => {
    props.permissions = []
    const noRender = (): JSX.Element | null => (
      <>
        <input type="text" placeholder="no_access" />
      </>
    )
    props.renderNoAccess = noRender

    const { queryAllByPlaceholderText, getByPlaceholderText } = renderComponent()

    const items = queryAllByPlaceholderText('test')
    expect(items.length).toBe(0)
    const item: HTMLInputElement = getByPlaceholderText('no_access') as HTMLInputElement
    expect(item).toBeInTheDocument()
  })
})
