import React, { ReactNode } from 'react'
import { Table as AntTable } from 'antd'
import { TableProps, ColumnProps } from 'antd/es/table'

export type MocaTableProps<RecordType> = TableProps<RecordType> & { children?: ReactNode }

export type MocaColumnProps<RecordType> = ColumnProps<RecordType>

const MocaTable = <T extends object = {}>(props: MocaTableProps<T>): JSX.Element => {
  return <AntTable<T> {...props} />
}

MocaTable.displayName = 'MocaTable'
type MocaTable = typeof MocaTable

interface Table extends MocaTable {
  Column: typeof AntTable.Column
}
const Table: Table = MocaTable as Table

export const Column = AntTable.Column

Table.Column = AntTable.Column

export default Table
