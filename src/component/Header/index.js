import React, { Component } from 'react';
import { component } from 'react-decoration';

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
    menu: ['about me', 'experience', 'protfolio']
  }

  onRenderList = (item, index) => {
    return (
      <li key={item}><a href="#">{item}</a></li>
    )
  }

  render() {
    const { menu } = this.state;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderMenu>
            <ul>
              {menu.map(this.onRenderList)}
            </ul>
          </HeaderMenu>
          <Introduction>
            <h1>Stan Mao</h1>
            <span>Backend Engineer</span>
          </Introduction>
          <SocialArea>
            <SocialIcon><i class="fab fa-twitter-square"></i></SocialIcon>
          </SocialArea>
        </HeaderContainer>
        <HeaderSocial>
          
        </HeaderSocial>
      </HeaderWrapper>
    );
  }
}

export default Header;