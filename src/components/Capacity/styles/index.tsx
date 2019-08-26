import styled from 'styled-components';

interface SkillItem {
  title: string;
  content: string;
}

interface ElementShow {
  isActive: boolean;
}

interface PhotoRef {
  src: any;
}


export const ExperienceSection = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  height: 100%;
`;


export const AvatorWrapper = styled.div`
  position: absolute;
  max-width: 50%;
  height: 100%;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
  background-color: #fff;
  z-index: 1;
`;

export const SkillWrapper = styled.div`
position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 2rem;
  width: 40rem;
  height: 100%;
  right: 20px;
  z-index: 5;
`;

export const SkillList = styled.div<ElementShow>`
  background-color: rgb(226, 235, 229);
  display: flex;
  color: #000;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 100%;
  opacity: ${(props: ElementShow) => props.isActive ? 1 : 0};
  transition: opacity 1s linear;
  & > p {
    display: ${(props: ElementShow) => props.isActive ? 'block' : 'none'};
    margin: 1rem 0;
    & > b {
      display: inline-block;
      width: 10rem;
      text-align: right;
      margin-right: 1rem;
    }
  }
`;

export const UserShaDow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const UserAvator = styled.img<PhotoRef>`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;