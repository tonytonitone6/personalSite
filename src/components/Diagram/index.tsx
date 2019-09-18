import React, {FunctionComponent} from 'react'

import {
  Test,
  Container
} from './styles';

const Diagram: FunctionComponent = () => {
  return (
    <Container>
      <Test target="true">
        123
      </Test>
    </Container>
  )
}

export default Diagram
