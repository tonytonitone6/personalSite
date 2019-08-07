import React, { useRef, useContext, useEffect } from 'react';

import { MenuContext } from '@context/menuContext';

import ContentList from '@assets/Content.json';
import {
  ContentWrapper
} from './styles';


interface TypeItem {
  id: number;
  name: string;
}

const List = ():JSX.Element => {
  const { _,  setRefController} = useContext(MenuContext);

  const refs = ContentList.reduce((acc: any, value: any):any => {
    
    acc[value.id] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    setRefController(refs);
  }, [])

  const onRenderContentBlock = (item: TypeItem) => {
    return (
      <ContentWrapper 
        key={item.id}
        ref={refs[item.id]}
        >
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

