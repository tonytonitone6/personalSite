import styled, {keyframes, css} from 'styled-components'
import * as Grid from '@styles/grid'
import avatorPhotos from '../../../images/avator.jpg'

interface HeaderProps {
  aniStatus: boolean
}

interface SocialProps {
  col8?: boolean
  col4?: boolean
}

const barStatus = css`
  background-color: #fff;
  height: 4rem;
  opacity: 0.3;
`

const moveToRight = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const moveToDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`
const imgAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5rem);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`

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
`

export const HeaderWrapper = styled.header`
  max-height: 100%;
`

export const HeaderContainer = styled.div``

export const HeaderMenu = styled.div`
  height: 4rem;
  ${({aniStatus}: HeaderProps) => (aniStatus ? barStatus : null)}
  position: fixed;
  top: 0;
  width: 100%;
  text-align: right;
  z-index: 10;
  transition: all 0.2s ease-in;
  @media (max-width: 576px) {
    display: none;
    height: 0;
  }
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
        height: 0.1rem;
        width: 0;
        transition: all 0.3s;
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
`

export const HeaderSocial = styled.div``

export const Introduction = styled.div`
  display: flex;
  margin-top: 4em;
  width: 100%;
  height: calc(100vh - 4em);

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const SocialArea = styled.div`
  ${(props: SocialProps) => {
    const [target] = Object.keys(props).filter(key => key.includes('col'))
    return (Grid as any)[target] ? (Grid as any)[target] : ''
  }};
  padding-bottom: 10rem;
  animation: ${imgAnimation} 0.5s linear;

  @media (max-width: 576px) {
    display: none;
  }
`

export const SocialBgImage = styled.img`
  border-radius: 0.2em;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: cover;
`

export const IconArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 15%;
`

export const SocialPersonal = styled.div`
  ${(props: SocialProps) => {
    const [target] = Object.keys(props).filter(key => key.includes('col'))
    return (Grid as any)[target] ? (Grid as any)[target] : ''
  }};
  max-width: 100%;
  color: #000;

  @media (max-width: 576px) {
    max-height: calc(100vh - 4em);
  }
`

export const SocialIcon = styled.a`
  margin: 1em 2em;
  & > [class*='fab'] {
    color: #000;
    font-size: 2rem;
    transition: all 1s;
    &:hover {
      color: lightsalmon;
    }
  }
`

export const PersonInfo = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  align-items: center;
  padding-top: 25%;
  & > p {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    padding-top: 1em;
  }
`

export const ArrowIcon = styled.img`
  position: absolute;
  width: 1.8em;
  height: 1.8em;
  bottom: 10em;
  animation: ${moveToDown} 1s 1s ease-out forwards,
    ${pulse} 2s 3s ease-out infinite;
  opacity: 0;
  cursor: pointer;

  @media (max-width: 576px) {
    display: none;
  }
`

export const Avator = styled.div`
  background-image: url(${avatorPhotos});
  width: 15em;

  height: 15em;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-top: 2em;
`
