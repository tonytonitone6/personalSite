import styled from 'styled-components'

export const ExpContainer = styled.div`
  position: relative;
  max-width: 100%;
  color: #000;
  &::after {
    content: '';
    position: absolute;
    left: 40%;
    top: 0;
    bottom: 0;
    width: 0.2em;
    background-color: #f0f0f0;
  }
`

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  max-height: 30em;
  height: 20em;
`

export const CardIcon = styled.div``

export const CardTime = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 30%;
  flex: 1;
`

export const CardDetail = styled.div`
  flex: 1;
  margin-left: 20%;
  padding-left: 1em;
  & > div:nth-last-of-type(1) {
    margin-top: 1em;
  }
`
