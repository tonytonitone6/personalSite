import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';

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
  ])

  const onRenderMenuList = ({ item, message}: {item: string, message: string}) => {
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
      </HeaderContainer>
    </HeaderWrapper>
  )
}


export default Header;