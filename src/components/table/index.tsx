import React, { PropsWithChildren } from 'react'
import { Table as AntTable } from 'antd'
import { TableProps, ColumnProps } from 'antd/es/table'
import './table.scss'

export type MocaTableProps<T> = PropsWithChildren<TableProps<T>>

export type MocaColumnProps<T> = ColumnProps<T>

const rowClass = <T extends object = {}>(_: T, index: number): string => {
  const modClass = index % 2 === 0 ? 'even' : 'odd'
  return modClass
}

const MocaTable = <T extends object = {}>(props: MocaTableProps<T>): JSX.Element => {
  return <AntTable<T> {...props} rowClassName={rowClass} />
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
