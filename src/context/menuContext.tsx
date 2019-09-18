import React, {
  createContext,
  ReactNode,
  FunctionComponent,
  useReducer,
  useContext,
} from 'react'

interface TypeMenuProps {
  children: ReactNode
  reducer: any
}

const initialState = {
  menuList: [],
  refs: null,
}

const MenuContext = createContext({} as any)

const MenuContextProvider = ({
  children,
  reducer,
}: TypeMenuProps): JSX.Element => {
  return (
    <MenuContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </MenuContext.Provider>
  )
}

const useMenuValue = () => useContext(MenuContext)

export {MenuContextProvider, useMenuValue}
