import React from 'react'
import MocaInputNumber from './input-number'

export default {
  component: MocaInputNumber,
  title: 'Components/MocaInputNumber',
}

export const basic = (): JSX.Element => <MocaInputNumber placeholder="Number Basic" />
export const formatter = (): JSX.Element => (
  <MocaInputNumber
    defaultValue={100}
    min={0}
    max={100}
    formatter={(value): string => `${value} %`}
    parser={(value): string => value.replace('%', '')}
    placeholder="Number Basic"
  />
)
export const decimal = (): JSX.Element => <MocaInputNumber placeholder="Number decimal" step={0.01} />
