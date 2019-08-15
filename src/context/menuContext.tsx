import React, 
  { createContext, 
    ReactNode, 
    FunctionComponent,
    useReducer
  } from 'react';

import { menuReducer } from '@reducers/menuReducer';

interface TypeMenuProps {
  children: () => ReactNode;
}

const initialState = {
  menuList: [],
  refs: null
}

const MenuContext = createContext({} as any);

const MenuContextProvider: FunctionComponent = (props: any): JSX.Element => {
  const [ state, dispatch ]:any = useReducer(menuReducer, initialState);
  
  return (
    <MenuContext.Provider value={{state, dispatch}}>
      {props.children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuContextProvider };