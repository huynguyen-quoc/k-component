import React, { PureComponent } from 'react'
import withLoading from './with-loading'

export default {
  title: 'Components/WithContentLoading',
  component: withLoading,
}

class BaseComponent extends PureComponent {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return <span>TestContent</span>
  }
}

export const loadingShow = (): JSX.Element => {
  const Component = withLoading({ loading: true })<{}>(BaseComponent)
  return <Component />
}
export const contentShow = (): JSX.Element => {
  const Component = withLoading({ loading: false })<{}>(BaseComponent)
  return <Component />
}
export const errorShow = (): JSX.Element => {
  const Component = withLoading({ loading: false, error: { message: 'Error Message' } })<{}>(BaseComponent)
  return <Component />
}
