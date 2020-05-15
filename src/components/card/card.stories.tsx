import React from 'react'
import MocaCard from './card'

export default {
  component: MocaCard,
  title: 'Components/MocaCard',
}
export const basic = (): JSX.Element => (
  <MocaCard title="Basic Header">
    <p>Basic</p>
    <p>Basic Card</p>
  </MocaCard>
)
