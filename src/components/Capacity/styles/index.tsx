import styled from 'styled-components'

import * as Grid from '@styles/grid';

interface SkillItem {
  title: string
  content: string
}

interface GridProps {
  flex?: boolean;
  col6?: boolean;
}

interface ElementShow {
  isActive: boolean
}

interface PhotoRef {
  src: any
}

export const ExperienceSection = styled.div`
  ${(props: GridProps) => props.flex ? Grid.row : ''};
  height: 100%;
  max-width: 100%;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    margin-bottom: .2rem;
  }
`

export const AvatorWrapper = styled.div`
  ${(props: GridProps) => {
    const [target] = Object.keys(props).filter(key => key.includes('col'));
    return (Grid as any)[target]? (Grid as any)[target] : '';
  }};
  /* height: 100%; */
  /* clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%); */
  background-color: #fff;
  z-index: 1;

  @media (max-width: 576px) {
    margin-top: 1px;
    display: block;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    max-width: 100%;
  }
`

export const SkillWrapper = styled.div`
  ${(props: GridProps) => props.col6 ? Grid.col6 : ''};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 5;

  @media (max-width: 576px) {
    max-width: 100%;
    display: block;
  }
`

export const SkillList = styled.div<ElementShow>`
  background-color: rgb(226, 235, 229);
  display: flex;
  color: #000;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
  height: 100%;
  opacity: ${(props: ElementShow) => (props.isActive ? 1 : 0)};
  transition: opacity 1s linear;
  & > p {
    display: ${(props: ElementShow) => (props.isActive ? 'block' : 'none')};
    margin: 1rem 0;
    & > b {
      display: inline-block;
      width: 10rem;
      text-align: right;
      margin-right: 1rem;
    }
  }

  @media (max-width: 996px) {
    font-size: 0.7rem;
    /* width: 500px; */
  }
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
`

export const SkillItem = styled.div`
  max-width: 100%;
  & > span {
    font-weight: 700;
    display: inline-block;
    padding-left: 0.2rem;
    margin: 0.5rem;
  }

  & > p {
    display: inline-block;
    max-width: 100%;
    /* margin: .5rem 0;
    padding-left: 20%; */
  }

  @media (max-width: 576px) {
    & > p {
      display: block;
      padding-left: 1rem;
    }
  }
`

export const UserShaDow = styled.div`
  width: 100%;
  height: 100%;
  padding: 30% 20%;

  @media (max-width: 576px) {
    padding: 0;
  }


`

export const UserAvator = styled.img<PhotoRef>`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`
