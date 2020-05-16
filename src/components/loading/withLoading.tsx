import React, { PureComponent } from 'react'
import { Row, Col, Skeleton } from 'antd'

export interface WithLoadingProps {
  loading: boolean
}
export const withLoading = ({ loading }: WithLoadingProps) => <P extends object = {}>(
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
          {!loading && <Component {...this.props} />}
        </>
      )
    }
  }
}

export default withLoading
