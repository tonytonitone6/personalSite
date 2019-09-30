import styled from 'styled-components';

import * as gridBase from '@styles/grid';

interface Iprops {
  target: string;
}

export const Container = styled.div`
  /* position: relative; */
  height: 100%;
  width: 100%;
`;

export const Test = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: #333;
  ${(props: Iprops) => (props.target ? gridBase.col1 : '')}
`;