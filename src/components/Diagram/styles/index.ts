import styled from 'styled-components';

import * as gridBase from '@styles/grid';

interface Iprops {
  target: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Test = styled.div`
  background-color: #333;
  ${(props: Iprops) => (props.target ? gridBase.col1 : '')}
`;