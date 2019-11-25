import styled, { css } from 'styled-components'


const borderBottom = css`
  border-bottom: 1px solid #000;
`;

interface OffsetType<T> {
  readonly offset: T;
}

interface ContentType {
  size: number;
}

interface ImgType {
  imgSrc: string;
}

export const CardContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  display: flex;
  max-width: 100%;
  height: 100%;
  min-height: 70rem;
  flex-direction: columns;
  align-items: center;
  justify-content: center;
  color: #fff;
  
  @media (max-width: 576px) {
    min-height: 20rem;
  }
`

export const ContentContainer = styled.div<OffsetType<number>>`
  width: 80%;
  max-width: 100%;
  max-height: 80%;
  height: 40rem;
  background-color: rgb(40, 40, 40);
  border-radius: 1rem;
  @media (min-width: 576px) {
    transition: all .5s linear;
    transform: translateY(${(props: OffsetType<number>) => props.offset}rem);

    &:hover {
      transform: translateY(-1rem);
    }
  }


`

export const ContentTitle = styled.div<ImgType>`
  display: block;
  background-image: url(${props => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  height: 10rem;
  max-width: 100%;
`

export const Content = styled.div<ContentType>`
  max-width: 100%;
  height: 50%;
  /* border: 1px solid lightpink; */
  font-size: ${(props: ContentType) => props.size}px;
`

export const ContentImage = styled.img``

