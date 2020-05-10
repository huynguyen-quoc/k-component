import React, { PureComponent } from 'react'
import { Table } from '../index'

export default {
  title: 'Table',
  component: Table,
  includeStories: [],
}

interface ModalState {
  visible: boolean
}
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

class BasicTable extends PureComponent<{}, ModalState> {
  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  render() {
    return (
      <Table<Data> dataSource={data}>
        <Table.Column<Data> key="name" title="Name" dataIndex="name" />
      </Table>
    )
  }
}
export const defaultView = () => <BasicTable />
