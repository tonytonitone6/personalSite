import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import MenuItem from './MenuItem';

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  HeaderSocial,
  Introduction,
  SocialArea,
  SocialIcon
} from './styles';


const Header: FunctionComponent = () => {

  const [menuLists, setMenuLists] = useState([
    { message: 'App.aboutMe', item: 'aboutMe'},
    { message: 'App.experience', item: 'experience' },
    { message: 'App.protfolio', item: 'protfolio' }
  ]);

  const [iconList, setIconList] = useState([
    { href: 'https://twitter.com/stanmao', icon: 'fab fa-twitter-square'},
    { href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook' },
    { href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw', item: 'fab fa-instagram' },
    { href: 'https://github.com/tonytonitone6', item: 'fab fa-github' }
  ])

  const onRenderMenuList = ({ item, message }: {item: string, message: string}) => {
    return (
      <li 
        key={item}
      >
        <a href="#">
          <FormattedMessage 
            id={message}
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
            {menuLists.map(onRenderMenuList)}
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