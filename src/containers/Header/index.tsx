import React, {
  FunctionComponent,
  useState,
  MouseEvent,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react'
import {FormattedMessage} from 'react-intl'

import {useMenuValue} from '@context/index'
import SocialContent from './SocialContent'
import MobileHeader from './MobileHeader'

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

const Header: FunctionComponent = () => {
  const [{menuList, refs}, _] = useMenuValue()
  const [aniStatus, setAnimation] = useState(false)
  const [active, setActive] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    const validStatus = (): void => {
      window.scrollY > 100 ? setAnimation(true) : setAnimation(false)
    }
    window.addEventListener('scroll', validStatus, false)

    return () => {
      window.removeEventListener('scroll', validStatus, false)
    }
  }, [])

  const memoToggle = useCallback(() => {
    setActive(preActive => !preActive)
  }, [])

  const handleClick = (e: MouseEvent<HTMLLIElement>, id: number) => {
    e.preventDefault()
    setActive(preActive => !preActive)
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleRenderMenuList = ({
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
        <HeaderMenu aniStatus={aniStatus} active={active}>
          <ul>
            {menuList && menuList.length !== 0
              ? menuList.map(handleRenderMenuList)
              : null}
          </ul>
          <MobileHeader active={active} onToggle={memoToggle} />
        </HeaderMenu>
        <Introduction>
          <SocialArea col8={true}>
            <SocialBgImage ref={imageRef} src={bgPhoto} />
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
