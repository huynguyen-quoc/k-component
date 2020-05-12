import React, { PropsWithChildren } from 'react'
import { Table as AntTable } from 'antd'
import { TableProps } from 'antd/es/table'
import './table.scss'

export type MocaTableProps<T> = PropsWithChildren<TableProps<T>>

const rowClass = <T extends object = {}>(_: T, index: number): string => {
  const modClass = index % 2 === 0 ? 'even' : 'odd'
  return modClass
}

export const MocaTable = <T extends object = {}>(props: MocaTableProps<T>): JSX.Element => {
  return <AntTable<T> {...props} rowClassName={rowClass} />
}

MocaTable.displayName = 'MocaTable'

export default MocaTable
