import React, {useState, useEffect, FunctionComponent, createRef} from 'react'

import {useQuery} from '@apollo/react-hooks'

import Capacity from '@components/Capacity'
import Diagram from '@components/Diagram'
import types from '@reducers/constants'
import {useMenuValue} from '@context/index'
import {GET_MENUS} from '@utils/fetch'
import {ContentWrapper} from './styles'

interface TypeItem {
  id: number
  name: string
}

const List: FunctionComponent = (): JSX.Element | null => {
  const [refStatus, setRefstatus] = useState(null)
  const [_, dispatch] = useMenuValue()
  const {
    data: {menuList = []},
  }: any = useQuery(GET_MENUS)
  const [block, ignoreFunc] = useState([
    {
      id: 1,
      component: Diagram,
    },
    {
      id: 2,
      component: Capacity,
    },
    {
      id: 3,
      component: Capacity,
    },
  ])

  const onRenderComponent = (Component: FunctionComponent): JSX.Element => {
    return <Component />
  }

  const onRenderContentBlock = (refs: any, item: TypeItem) => {
    return (
      <ContentWrapper key={item.id} ref={refs[item.id]}>
        {onRenderComponent(block[item.id].component)}
      </ContentWrapper>
    )
  }

  useEffect(() => {
    const refs = menuList.reduce((acc: any, value: TypeItem) => {
      acc[value.id] = createRef()
      return acc
    }, {})

    setRefstatus(refs)

    dispatch({
      type: types.SET_MENU,
      payload: {
        refs,
        menuList,
      },
    })
  }, [menuList])

  if (menuList.length !== 0 && refStatus !== null) {
    return (
      <>
        {menuList.map((item: TypeItem) =>
          onRenderContentBlock(refStatus, item),
        )}
      </>
    )
  }
  return null
}

export default List
