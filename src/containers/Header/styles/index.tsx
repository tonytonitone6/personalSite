import styled, { keyframes } from 'styled-components';
import bgPhotos from '../../../images/header.jpg';

const moveToRight = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const moveToDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
    transform: none;
  }

  50% {
    opacity: .8;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1.2);
  }

`;


export const HeaderWrapper = styled.header`
  height: 100%;
`;

export const HeaderContainer = styled.div`
  position: relative;
  height: 100%;
  background-image: linear-gradient(rgba(55, 93, 100, 0.5), rgba(226, 235, 229, 0.5)), url(${bgPhotos});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderMenu = styled.div`
  @media (max-width: 576px) {
    display: none;
  }

  position: fixed;
  z-index: 10;
  & > ul {
    text-transform: uppercase;

    &> li {
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
        color: #000;
      }
    }
  }
`;

export const HeaderSocial = styled.div`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  background: #000;
  opacity: 0.9;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
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
    text-align: center;
  }
  @media (max-width: 576px) {
    & > span {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1024px) {
    & > span {
      font-size: 1rem;
    }
  }
`;

export const SocialArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  margin: 1rem 2rem;
  & > [class*="fab"] {
    color: #fff;
    font-size: 2rem;
    transition: all 1s;
    &:hover {
      color: red;
    }
  }
`;


export const ArrowIcon = styled.img`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  bottom: 3rem;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${moveToDown} 1s 1s ease-out forwards, ${pulse} 2s 3s ease-out infinite;
  opacity: 0;
  cursor: pointer;
`