import React, {useState, useEffect, FunctionComponent, createRef} from 'react'

import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import useFetch from '@hooks/useFetch'
import Capacity from '@components/Capacity'
import Experience from '@components/Experience'
import Diagram from '@components/Diagram'
import types from '@reducers/constants'
import {useMenuValue} from '@context/index'
import getSchema from '@utils/fetch'
import {ContentWrapper} from './styles'

interface TypeItem {
  id: number
  name: string
}
interface ItemData {
  id: number;
  name: string;
}

interface GetDataList {
  menuList: ItemData[];
}



const List: FunctionComponent = (): JSX.Element | null => {
  const [refStatus, setRefstatus] = useState(null)
  const [_, dispatch] = useMenuValue()

  const {loading, data} = useQuery<GetDataList>(getSchema('GET_MENUS'), {
    fetchPolicy: 'no-cache',
  })

  const [block, ignoreFunc] = useState([
    {
      id: 1,
      component: Diagram,
    },
    {
      id: 2,
      component: Experience,
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
    if (data && data.menuList) {
      const refs = data.menuList.reduce((acc: any, value: TypeItem) => {
        acc[value.id] = createRef()
        return acc
      }, {})
  
      setRefstatus(refs)
  
      dispatch({
        type: types.SET_MENU,
        payload: {
          refs,
          menuList: data.menuList,
        },
      })
    }

  }, [data!.menuList])

  if (data && data.menuList && refStatus !== null) {
    return (
      <>
        {data && data.menuList.map((item: TypeItem) =>
          onRenderContentBlock(refStatus, item),
        )}
      </>
    )
  }
  return null
}

export default List
