import React, { PureComponent } from 'react'
import MocaTable from './table'
import Column from './column'

export default {
  component: MocaTable,
  title: 'Components/MocaTable',
  subcomponents: { 'MocaTable.Column': Column },
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

  render(): JSX.Element {
    return (
      <MocaTable<Data> dataSource={data}>
        <Column<Data> key="name" title="Name" dataIndex="name" />
      </MocaTable>
    )
  }
}
export const basic = (): JSX.Element => <BasicTable />
