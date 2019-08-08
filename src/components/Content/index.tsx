import React, { useRef, useContext, useEffect, useState, FunctionComponent, memo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MenuContext } from '@context/menuContext';
import { GET_MENUS } from '@utils/fetch'
import ContentList from '@assets/Content.json';
import {
  ContentWrapper
} from './styles';


interface TypeItem {
  id: number;
  name: string;
}

const List:FunctionComponent = ():JSX.Element => {
  const { _,  setRefController} = useContext(MenuContext);
  const [menuList, setMenuList] = useState(() => []);

  // useEffect(() => {
  //   setRefController(refs);
  // }, []);

  const {data} = useQuery(GET_MENUS)

  console.log(data);
  
  

  const refs = ContentList.reduce((acc: any, value: any):any => {
    acc[value.id] = useRef(null);
    return acc;
  }, {});


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

const MemoList = memo(List);

export default MemoList;

