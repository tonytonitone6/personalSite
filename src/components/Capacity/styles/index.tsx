import styled from 'styled-components'

import * as Grid from '@styles/grid'

interface SkillItem {
  title: string
  content: string
}

interface GridProps {
  flex?: boolean
  col6?: boolean
}

interface ElementShow {
  isActive: boolean
}

interface PhotoRef {
  src: any
}

export const ExperienceSection = styled.div`
  ${(props: GridProps) => (props.flex ? Grid.row : '')};
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
  @media (min-width: 1800px) {
    margin-bottom: 0;
    flex-wrap: nowrap;
    height: 100%;
  }
`

export const AvatorWrapper = styled.div`
  ${(props: GridProps) => {
    const [target] = Object.keys(props).filter(key => key.includes('col'))
    return (Grid as any)[target] ? (Grid as any)[target] : ''
  }};
  /* max-height: 50%; */

  /* @media (min-width: 180) {
    max-height: 100%;
  } */
`

export const SkillWrapper = styled.div`
  ${(props: GridProps) => {
    const [target] = Object.keys(props).filter(key => key.includes('col'))
    return (Grid as any)[target] ? (Grid as any)[target] : ''
  }};
  background-color: rgb(226, 235, 229);
  max-height: 100%;

  /* @media (min-width: 996px) {
    max-height: 1000px;
  } */
`

export const SkillList = styled.div<ElementShow>`
  max-width: 100%;
`

export const SkillItem = styled.div`
  max-width: 100%;
  margin: 1rem;
`

export const UserShaDow = styled.div`
  padding: 0;

  @media (min-width: 996px) {
    /* padding: 20% 15%; */
  }
`

export const UserAvator = styled.img<PhotoRef>`
  width: 100%;
  max-height: 1000px;
  object-fit: cover;
`
