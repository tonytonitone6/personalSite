import React, {FunctionComponent} from 'react'

import Common from '@styles/common'
import {
  Container,
  Flag,
  ContentWords
} from './styles';

interface DataType {
  name: string;
  offset: number;
  skill: string;
  url: string;
};

const dataList = [
  {
    name: 'front-end',
    skill: 'React/Redux, NextJS, Styled-Components, Emotion, Redux-Saga, Testing/library/react, Cypress',
    offset: 1,
    url: 'https://hackernoon.com/hn-images/1*_DOHv30w-0eI-Ysz5U47Yg.png'
  },
  {
    name: 'back-end',
    skill: 'NodeJS(Express,Koa,Nest), Python(Flask), Golang, MongoDB, PostgreSQL, Redis',
    offset: 6,
    url: 'https://unit42.paloaltonetworks.com/wp-content/uploads/2019/07/golang-hacker.jpg'
  },
  {
    name: 'others',
    skill: 'GraphQL, DroneCI, Docker, TypeScript, Nginx',
    offset: 2,
    url: 'https://miro.medium.com/max/4000/1*yzuJnF3vENKW9BEPTBp65Q.png'
  },
]

const Diagram: FunctionComponent = (): JSX.Element => {
  const onRenderContent = (item: string) => {
    return (
      <ContentWords key={item}>
        {item}
      </ContentWords>
    )
  }

  const onRenderCard = (item: DataType) => {
    return (
      <Flag key={item.name} col4={true} style={{}}>
        <Common.Card.CardContainer>
          <Common.Card.ContentContainer offset={item.offset}>
            <Common.Card.ContentTitle imgSrc={item.url} />
            <Common.Card.Content size={20}>
              {item.skill.split(', ').map(onRenderContent)}
            </Common.Card.Content>
          </Common.Card.ContentContainer>
        </Common.Card.CardContainer>
      </Flag>
    )
  }

  return <Container>{dataList.map(onRenderCard)}</Container>
}

export default Diagram
