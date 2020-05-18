import React, { PureComponent, ReactNode } from 'react'
import { Row, Col, Skeleton, Empty } from 'antd'
export type WithLoadingErrorType = {
  message: string
  image?: ReactNode
}
export interface WithLoadingProps {
  loading: boolean
  error?: WithLoadingErrorType
}
export const withLoading = ({ loading, error }: WithLoadingProps) => <P extends object = {}>(
  Component: React.ComponentType<P>,
): React.ComponentClass<P> => {
  return class extends PureComponent<P> {
    static displayName = `withLoading${Component.displayName || Component.name}`
    render(): JSX.Element {
      return (
        <>
          {loading && (
            <Row>
              <Col span={24}>
                <Skeleton paragraph={{ rows: 5 }} active />
              </Col>
            </Row>
          )}
          {!loading && !error && <Component {...this.props} />}
          {!loading && error && <Empty description={error.message} image={error.image} />}
        </>
      )
    }
  }
}

export default withLoading
