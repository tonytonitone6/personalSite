import React, {
  FunctionComponent,
  useState,
  MouseEvent,
  useLayoutEffect,
  useMemo,
} from 'react'
import {FormattedMessage} from 'react-intl'

import {useMenuValue} from '@context/index'
import types from '@reducers/constants'
import SocialContent from './SocialContent'

import bgPhoto from '../../images/bg.jpg'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  Introduction,
  SocialArea,
  SocialPersonal,
  SocialBgImage,
} from './styles'

interface TypeMenuItem {
  id: number
  name: string
}

const Header: FunctionComponent = () => {
  const [{menuList, refs}, ignoreDispatch] = useMenuValue()
  const [aniStatus, setAnimation] = useState(() => false)

  useLayoutEffect(() => {
    const validStatus = (): void => {
      window.scrollY > 100 ? setAnimation(true) : setAnimation(false)
    }
    window.addEventListener('scroll', validStatus, false)

    return () => {
      window.removeEventListener('scroll', validStatus, false)
    }
  }, [])

  const handleClick = (e: MouseEvent<HTMLLIElement>, id: number) => {
    e.preventDefault()
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const onRenderMenuList = ({
    id,
    name,
  }: {
    id: number
    name: string
  }): JSX.Element | null => {
    if (menuList && menuList.length !== 0) {
      return (
        <li key={id} onClick={e => handleClick(e, id)}>
          <a href="#">
            <FormattedMessage id={name} />
          </a>
        </li>
      )
    }
    return null
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderMenu aniStatus={aniStatus}>
          <ul>
            {menuList && menuList.length !== 0
              ? menuList.map(onRenderMenuList)
              : null}
          </ul>
        </HeaderMenu>
        <Introduction>
          <SocialArea col8={true}>
            <SocialBgImage src={bgPhoto} />
          </SocialArea>
          <SocialPersonal col4={true}>
            <SocialContent />
          </SocialPersonal>
        </Introduction>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
