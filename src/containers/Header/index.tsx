import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import MenuItem from './MenuItem';
import ContentList from '@assets/Content.json';

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  HeaderSocial,
  Introduction,
  SocialArea,
  SocialIcon
} from './styles';


interface TypeMenuItem {
  id: number;
  name: string;
}


const Header: FunctionComponent = () => {
  const [iconList, setIconList] = useState([
    { href: 'https://twitter.com/stanmao', icon: 'fab fa-twitter-square'},
    { href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook' },
    { href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw', item: 'fab fa-instagram' },
    { href: 'https://github.com/tonytonitone6', item: 'fab fa-github' }
  ])

  const onRenderMenuList = ({id, name}: TypeMenuItem) => {
    return (
      <li 
        key={id}
      >
        <a href="#">
          <FormattedMessage 
            id={name}
          />
        </a>
      </li>
    )
  }



  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderMenu>
          <ul>
            {ContentList.map(onRenderMenuList)}
          </ul>
        </HeaderMenu>
        <Introduction>
          <h1>Stan Mao</h1>
          <span>Backend Engineer</span>
          <SocialArea>

          </SocialArea>
        </Introduction>
      </HeaderContainer>
    </HeaderWrapper>
  )
}


export default Header;