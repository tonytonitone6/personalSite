import styled from 'styled-components';

import * as Grid from '@styles/grid';

interface Iprops {
  target: string;
}

interface GridProps {
  flex?: boolean;
  col4?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Flag = styled.div`
  ${(props: GridProps) => {
    const [target] = Object.keys(props).filter(key => key.includes('col'));
    return (Grid as any)[target]? (Grid as any)[target] : '';
  }};
  color: #000;
  max-width: 100%;
  width: 100%;
  /* background-color: blue; */
`;


