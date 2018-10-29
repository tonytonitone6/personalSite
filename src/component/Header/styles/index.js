import styled, { keyframes } from 'styled-components';
import bgPhotos from '../../../images/header.jpg';



const moveToRight = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HeaderWrapper = styled.header`
    height: 70vh;
    background-image: linear-gradient(rgba(45, 93, 225, 0.5), rgba(9, 30, 220, 0.5)), url(${bgPhotos});
    background-size: cover;
    background-position: center;
`;

export const HeaderContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderMenu = styled.div`
  & > ul {
    text-transform: uppercase;
    & > li {
      display: inline-block;
      margin: 1rem 1rem 0 1rem;
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        background-color: rgba(1, 4, 29, 1);
        height: .1rem;
        width: 0;
        transition: all .3s;
        position: absolute;
        left: 0;
        bottom: -0.8rem;
      }

      &:hover::after {
        width: 100%;
      }
      
      & > a { 
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const HeaderSocial = styled.div`
  position: absolute;
  bottom: 0;
  height: 30vh;
  width: 100vw;
  background: #000;
  opacity: 0.9;
`;

export const Introduction = styled.div`
  flex: 0 0 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
  & > h1 {
    animation: ${moveToRight} 1s ease-in;
    text-align: center;
  }

  & > span {
    font-size: 3rem;
    display: block;
    margin: 2rem;
  }
`;

export const SocialArea = styled.div`

`;

export const SocialIcon = styled.span`

`;