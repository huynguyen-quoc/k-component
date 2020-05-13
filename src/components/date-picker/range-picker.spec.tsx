import * as React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import RangePicker, { MocaDateRangePickerProps } from './range-picker'
import moment, { Moment } from 'moment'
import '@testing-library/jest-dom/extend-expect'

describe('DateRangePicker', () => {
  let props: MocaDateRangePickerProps
  const startDate: Moment = moment()
  const endDate: Moment = moment()

  beforeEach(() => {
    props = {
      value: [startDate, endDate],
      defaultValue: [startDate, endDate],
    }
  })
  const renderComponent = (): RenderResult => render(<RangePicker {...props} />)
  it('should render correctly with correct dates', async () => {
    const { getByPlaceholderText } = renderComponent()

    const formatTitleStart = startDate.format('DD/MM/YYYY')
    const formatTitleEnd = endDate.format('DD/MM/YYYY')
    const startItem: HTMLInputElement = getByPlaceholderText('Start Date') as HTMLInputElement
    const endItem: HTMLInputElement = getByPlaceholderText('End Date') as HTMLInputElement
    expect(startItem).toBeInTheDocument()
    expect(endItem).toBeInTheDocument()
    expect(startItem.value).toBe(formatTitleStart)
    expect(endItem.value).toBe(formatTitleEnd)
  })
  it('should render correctly with undefined dates', async () => {
    props.value = undefined
    props.defaultValue = undefined
    const { getByPlaceholderText } = renderComponent()

    const startItem: HTMLInputElement = getByPlaceholderText('Start Date') as HTMLInputElement
    const endItem: HTMLInputElement = getByPlaceholderText('End Date') as HTMLInputElement
    expect(startItem).toBeInTheDocument()
    expect(endItem).toBeInTheDocument()
    expect(startItem.value).toBe('')
    expect(endItem.value).toBe('')
  })
  it('should render correctly with updated format', async () => {
    props.format = 'dateTime'
    const { getByPlaceholderText } = renderComponent()

    const formatTitleStart = startDate.format('DD/MM/YYYY hh:mm:ss A')
    const formatTitleEnd = endDate.format('DD/MM/YYYY hh:mm:ss A')
    const startItem: HTMLInputElement = getByPlaceholderText('Start Date') as HTMLInputElement
    const endItem: HTMLInputElement = getByPlaceholderText('End Date') as HTMLInputElement
    expect(startItem).toBeInTheDocument()
    expect(endItem).toBeInTheDocument()
    expect(startItem.value).toBe(formatTitleStart)
    expect(endItem.value).toBe(formatTitleEnd)
  })
  it('should render correctly with updated format type', async () => {
    props.formatType = { date: 'MM-DD-YYYY', dateTime: 'MM-DD-YY hh:mm:ss' }
    props.format = 'dateTime'
    const { getByPlaceholderText } = renderComponent()

    const formatTitleStart = startDate.format('MM-DD-YY hh:mm:ss')
    const formatTitleEnd = endDate.format('MM-DD-YY hh:mm:ss')
    const startItem: HTMLInputElement = getByPlaceholderText('Start Date') as HTMLInputElement
    const endItem: HTMLInputElement = getByPlaceholderText('End Date') as HTMLInputElement
    expect(startItem).toBeInTheDocument()
    expect(endItem).toBeInTheDocument()
    expect(startItem.value).toBe(formatTitleStart)
    expect(endItem.value).toBe(formatTitleEnd)
  })
  it('should render correctly with updated place holder', async () => {
    props.placeholder = { start: 'Start', end: 'End' }
    const { getByPlaceholderText } = renderComponent()

    const startItem: HTMLInputElement = getByPlaceholderText('Start') as HTMLInputElement
    const endItem: HTMLInputElement = getByPlaceholderText('End') as HTMLInputElement
    expect(startItem).toBeInTheDocument()
    expect(endItem).toBeInTheDocument()
  })
  it('should update value correct when change date', async () => {
    props.value = undefined
    props.defaultValue = undefined
    props.defaultOpen = true
    props.onChange = jest.fn()
    const { getByPlaceholderText, queryAllByTitle } = renderComponent()

    const startItem: HTMLInputElement = getByPlaceholderText('Start Date') as HTMLInputElement
    const endItem: HTMLInputElement = getByPlaceholderText('End Date') as HTMLInputElement
    expect(startItem.value).toBe('')
    expect(endItem.value).toBe('')
    const currentDates = queryAllByTitle(startDate.format('YYYY-MM-DD'))
    const previousDates = queryAllByTitle(startDate.add(-1, 'd').format('YYYY-MM-DD'))
    const nextDates = queryAllByTitle(startDate.add(1, 'd').format('YYYY-MM-DD'))
    fireEvent.click(currentDates[0])
    fireEvent.click(previousDates[1])
    expect(startItem.value).toBe(startDate.add(-1, 'd').format('DD/MM/YYYY'))
    expect(endItem.value).toBe(endDate.add(-1, 'd').format('DD/MM/YYYY'))
    fireEvent.click(nextDates[0])
    fireEvent.click(currentDates[1])
    expect(startItem.value).toBe(startDate.add(1, 'd').format('DD/MM/YYYY'))
    expect(endItem.value).toBe(endDate.add(1, 'd').format('DD/MM/YYYY'))
    fireEvent.click(nextDates[0])
    fireEvent.click(nextDates[1])
    expect(startItem.value).toBe(startDate.format('DD/MM/YYYY'))
    expect(endItem.value).toBe(endDate.format('DD/MM/YYYY'))
  })
})
