import React, { useRef, useContext } from 'react';


import ContentList from '@assets/Content.json';
import {
  ContentWrapper
} from './styles';

interface TypeItem {
  id: number;
  name: string;
}

const List = ():JSX.Element => {
  const refs = ContentList.reduce((acc: any, value: any):any => {
    acc[value.id] = useRef(null);
    return acc;
  }, {})


  const handleClick = (id:string) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  const onRenderContentBlock = (item: TypeItem) => {
    return (
      <ContentWrapper key={item.id}>
        <div>{item.name}</div>
      </ContentWrapper>
    )
  }

  return (
    <>
      { ContentList.map(onRenderContentBlock) }
    </>
  )
}

export default List;

