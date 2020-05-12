import Table from './table'
import Column from './column'

type MocaTable = typeof Table
interface TableType extends MocaTable {
  Column: typeof Column
}

const MocaTable: TableType = Table as TableType

MocaTable.Column = Column

export default MocaTable
