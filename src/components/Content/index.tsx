import 
  React, 
  { 
    useState,
    useEffect,
    FunctionComponent,
    createRef,
    useContext,
    useRef
  } from 'react';

import { useQuery } from '@apollo/react-hooks';

import types from '@reducers/constants';
import { MenuContext } from '@context/menuContext';
import { GET_MENUS } from '@utils/fetch';
import { menuReducer } from '@reducers/index';
import ContentList from '@assets/Content.json';
import {
  ContentWrapper
} from './styles';


interface TypeItem {
  id: number;
  name: string;
}

const List:FunctionComponent = ():JSX.Element | null => {
  const [refStatus, setRefstatus] = useState(null);
  const { state, dispatch } = useContext(MenuContext);
  const {data: { menuList = [] }}: any = useQuery(GET_MENUS);
  
  const onRenderContentBlock = (refs: any, item: any) => {
    return (
      <ContentWrapper 
        key={item.id}
        ref={refs[item.id]}
        >
        <div>{item.name}</div>
      </ContentWrapper>
    )
  }

  useEffect(() => {        
    const refs = menuList.reduce((acc: any, value: any):any => {
      acc[value.id] = createRef();
      return acc;
    }, {});
    
    setRefstatus(refs);

    dispatch({
      type: types.SET_MENU, 
      payload: {
        refs,
        menuList
      }
    });
  }, [menuList]);

  if (menuList.length !== 0 && refStatus !== null) {    
    return (
      <>
        { menuList.map((item:any) => onRenderContentBlock(refStatus, item)) }
      </>
    )
  }
  return null;
}

export default List;

