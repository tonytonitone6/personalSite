import React, { FunctionComponent, useState, useContext, MouseEvent } from 'react';
import { FormattedMessage } from 'react-intl';

import { SocialArea } from './SocialArea';
import ContentList from '@assets/Content.json';
import { MenuContext } from '@context/index';

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  HeaderSocial,
  Introduction,
  SocialIcon
} from './styles';


interface TypeMenuItem {
  id: number;
  name: string;
}


const Header: FunctionComponent = () => {
  const [skillList, setSkillList] = useState([
    { href: 'https://twitter.com/stanmao', item: 'fab fa-twitter-square'},
    { href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook' },
    { href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw', item: 'fab fa-instagram' },
    { href: 'https://github.com/tonytonitone6', item: 'fab fa-github' }
  ]);

  const { refController, _ } = useContext(MenuContext);

  const handleClick = (e: MouseEvent<HTMLLIElement>, id: number) => {
    e.preventDefault();
    refController[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  
  const onRenderMenuList = ({id, name}: TypeMenuItem):JSX.Element | null => {
    if (refController && typeof refController === 'object') {
      return (
        <li 
          key={id}
          onClick={(e) => handleClick(e, id)}
        >
          <a href="#">
            <FormattedMessage 
              id={name}
            />
          </a>
        </li>
      )
    }
    return null;
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
          <SocialArea skillList={skillList} />
        </Introduction>
      </HeaderContainer>
    </HeaderWrapper>
  )
}


export default Header;