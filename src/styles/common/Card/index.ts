import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  min-height: 70rem;
  flex-direction: columns;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  
  @media (max-width: 576px) {
    min-height: 20rem;
  }
`;


export const ContentContainer = styled.div`
  width: 80%;
  max-width: 100%;
  max-height: 80%;
  height: 50rem;
  border: 1px solid red;
`;

export const ContentTitle = styled.div`
  height: 10rem;
  max-width: 100%;
  border: 1px solid green;
`;

export const Content = styled.div`
  max-width: 100%;
  height: 50%;
  border: 1px solid lightpink;
`;

export const ContentImage = styled.img`

`
