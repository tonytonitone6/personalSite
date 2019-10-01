import React, {FunctionComponent} from 'react'

import {
  Card
} from '@styles/Card';
import {
  Container,
  Flag
} from './styles';



const Diagram: FunctionComponent = () => {
  
  const dataList = [
    {
      name: 'front-end'
    },
    {
      name: 'back-end'
    },
    {
      name: 'others'
    }
  ];

  const onRenderCard = (item: any) => {
    return (
      <Flag
        key={item.name}
        col4={true}
      >
        <Card>
          123
        </Card>
      </Flag>
    )
  }
  
  return (
    <Container>
      {dataList.map(onRenderCard)}
    </Container>
  )
}

export default Diagram
