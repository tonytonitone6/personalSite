import React, { Component } from 'react';
import { component } from 'react-decoration';
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



@component
class Header {

  state = {
    menu: [
      { message: "App.aboutMe", item:"aboutMe" },
      { message: "App.experience", item:"experience" },
      { message: "App.protfolio", item:"protfolio" }
    ]
  }

  onRenderMenuList = ({ item, message }, index) => {
    const { scroll } = this.props;
    return (
      <li key={item} onClick={scroll}>
        <a href="#">
          <FormattedMessage 
            id={message}
          />
        </a>
      </li>
    )
  } 

  render() {
    const { menu } = this.state;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderMenu>
            <ul>
              {menu.map(this.onRenderMenuList)}
            </ul>
          </HeaderMenu>
          <Introduction>
            <h1>Stan Mao</h1>
            <span>Backend Engineer</span>
            <SocialArea>
              <SocialIcon target="_blank" href="https://twitter.com/stanmao"><i className="fab fa-twitter-square"></i></SocialIcon>
              <SocialIcon target="_blank" href="https://www.facebook.com/yuhsaing.mao"><i className="fab fa-facebook"></i></SocialIcon>
              <SocialIcon target="_blank" href="https://www.instagram.com/tonytonitone6/?hl=zh-tw"><i className="fab fa-instagram"></i></SocialIcon>
              <SocialIcon target="_blank" href="https://github.com/tonytonitone6"><i className="fab fa-github"></i></SocialIcon>
            </SocialArea>
          </Introduction>
        </HeaderContainer>
        <HeaderSocial>
        </HeaderSocial>
      </HeaderWrapper>
    );
  }
}

export default Header;