import React, {FunctionComponent, useState, MouseEvent, useMemo} from 'react'
import {FormattedMessage} from 'react-intl'

import {MemoSocialArea} from './SocialArea'
import {useMenuValue} from '@context/index'
import types from '@reducers/constants'

import ArrowLogo from '../../images/down-arrow.png'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  Introduction,
  ArrowIcon,
} from './styles'

interface TypeMenuItem {
  id: number
  name: string
}

const Header: FunctionComponent = () => {
  const [skillList, setSkillList] = useState([
    {href: 'https://twitter.com/stanmao', item: 'fab fa-twitter-square'},
    {href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook'},
    {
      href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw',
      item: 'fab fa-instagram',
    },
    {href: 'https://github.com/tonytonitone6', item: 'fab fa-github'},
  ])

  const [{menuList, refs}, _] = useMenuValue()

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

  const moveToNextPage = (): void => {
    refs[0].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderMenu>
          <ul>
            {menuList && menuList.length !== 0
              ? menuList.map(onRenderMenuList)
              : null}
          </ul>
        </HeaderMenu>
        <Introduction>
          <h1>Stan Mao</h1>
          <span>Backend Engineer</span>
          <MemoSocialArea skillList={useMemo(() => skillList, [])} />
        </Introduction>
        <ArrowIcon src={ArrowLogo} onClick={moveToNextPage} />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
