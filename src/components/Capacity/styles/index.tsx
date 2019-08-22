import styled from 'styled-components';

interface SkillItem {
  title: string;
  content: string;
}

interface ElementShow {
  isActive: boolean;
}


export const ExperienceSection = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: rgb(226, 235, 229);
`;


export const AvatorWrapper = styled.div`
  width: 50%;
  height: 100%;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
  background-color: #fff;
`;

export const SkillList = styled.div<ElementShow>`
  display: flex;
  color: #000;
  flex-flow: column nowrap;
  justify-content: center;
  width: 50%;
  height: 100%;
  font-size: 1.1rem;
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