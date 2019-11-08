import React, {FunctionComponent} from 'react'

import Common from '@styles/common';
import {
  Container,
  Flag,
  // ContentContainer
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
        <Common.Card.CardContainer>
          <Common.Card.ContentContainer>
            <Common.Card.ContentTitle>
              Front End
            </Common.Card.ContentTitle>
            <Common.Card.Content>
              456
            </Common.Card.Content>
          </Common.Card.ContentContainer>
          
        </Common.Card.CardContainer>
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
