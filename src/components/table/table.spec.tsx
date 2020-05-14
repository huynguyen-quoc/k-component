import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Table, { MocaTableProps } from './table'
import Column from './column'
import '@testing-library/jest-dom/extend-expect'

interface Data {
  key: number
  name: string
}
const data: Data[] = [
  {
    key: 0,
    name: 'Jack',
  },
  {
    key: 1,
    name: 'Ken',
  },
]
describe('Modal', () => {
  let props: MocaTableProps<Data>

  beforeEach(() => {
    props = {
      dataSource: data,
    }
  })

  const renderComponent = (): RenderResult =>
    render(
      <Table<Data> {...props}>
        <Column<Data> key="name" title="Name" dataIndex="name" />
      </Table>,
    )
  it('should render correctly', async () => {
    const { getByText } = renderComponent()

    const firstRowItem: HTMLDivElement = getByText('Jack') as HTMLDivElement
    const secondRowItem: HTMLDivElement = getByText('Ken') as HTMLDivElement
    expect(firstRowItem).toBeTruthy()
    expect(secondRowItem).toBeTruthy()
  })
})
