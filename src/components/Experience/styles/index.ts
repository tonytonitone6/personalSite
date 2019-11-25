import styled from 'styled-components';

export const ExpContainer = styled.div`
  position: relative;
  max-width: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 40%;
    top: 0;
    bottom: 0;
    width: .2em;
    background-color: #f0f0f0;
  }
`;

export const CardRow = styled.div`
  display: flex;
`;

export const CardIcon = styled.div`

`;

export const CardTime = styled.div`

`;


export const CardDetail = styled.div`

`;