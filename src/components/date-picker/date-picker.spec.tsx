import * as React from 'react'
import { render, RenderResult } from '@testing-library/react'
import DatePicker, { MocaDatePickerProps } from './date-picker'
import moment, { Moment } from 'moment'
import '@testing-library/jest-dom/extend-expect'

describe('DatePicker', () => {
  let props: MocaDatePickerProps
  const currentDate: Moment = moment()

  beforeEach(() => {
    props = {
      value: currentDate,
    }
  })
  const renderComponent = (): RenderResult => render(<DatePicker {...props} />)
  it('should render correctly with correct date', async () => {
    const { getByTitle } = renderComponent()

    const formatTitle = currentDate.format('DD/MM/YYYY')
    const item: HTMLInputElement = getByTitle(formatTitle) as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe(formatTitle)
  })
  it('should render correctly with null date', async () => {
    props.value = null
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('Select date') as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe('')
  })
  it('should render correctly with invalid date', async () => {
    props.value = '13/13/13'
    const { getByPlaceholderText } = renderComponent()

    const item: HTMLInputElement = getByPlaceholderText('Select date') as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe('')
  })
  it('should render correctly with updated format', async () => {
    props.format = 'dateTime'
    const { getByTitle } = renderComponent()

    const formatTitle = currentDate.format('DD/MM/YYYY hh:mm:ss A')
    const item: HTMLInputElement = getByTitle(formatTitle) as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe(formatTitle)
  })
  it('should render correctly with updated format type', async () => {
    props.formatType = { date: 'MM-DD-YYYY', dateTime: 'MM-DD-YY hh:mm:ss' }
    props.format = 'dateTime'
    const { getByTitle } = renderComponent()

    const formatTitle = currentDate.format('MM-DD-YY hh:mm:ss')
    const item: HTMLInputElement = getByTitle(formatTitle) as HTMLInputElement
    expect(item).toBeInTheDocument()
    expect(item.value).toBe(formatTitle)
  })
})
