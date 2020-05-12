import { Table as AntTable } from 'antd'
import { ColumnProps } from 'antd/es/table'
import './table.scss'

export type MocaColumnProps<T> = ColumnProps<T>

export const MocaColumn = AntTable.Column
export default MocaColumn
