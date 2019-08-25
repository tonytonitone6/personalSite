import React, 
  { 
    useRef, 
    useState, 
    useLayoutEffect, 
    memo, 
    FunctionComponent
} from 'react';

import useLocation from '@hooks/useLocation';
import { 
  ExperienceSection ,
  AvatorWrapper,
  SkillList,
  UserAvator,
  SkillWrapper
} from './styles';

import userPhoto from '../../images/user.jpg';


const personalContent = [
  {
    title: 'Front-End',
    content: 'React/Redux hooks, styled-component, redux-saga, reselect'
  },
  {
    title: 'Back-End',
    content: 'Node(express, koa), Python(flask), Go(gin)'
  },
  {
    title: 'Database',
    content: 'PostgreSQL, MongoDB, Redis'
  },
  {
    title: 'Test Tools',
    content: 'Jest, Enzyme'
  },
  {
    title: 'Others',
    content: 'TypeScript, GraphQL'
  }
];


interface SkillItem {
  title: string;
  content: string;
}


const SkillSection: FunctionComponent = (): JSX.Element => {
  const [location, _]: any = useLocation();
  const [animate, setAnimate] = useState(false);
  const elementRef: any | null = useRef(null);
  let limit: number | undefined;
  
  if (elementRef.current !== null) {
    limit = elementRef.current.clientHeight + elementRef.current.clientHeight / 2;
  }

  useLayoutEffect(() => {
    if (elementRef.current !== null && window.scrollY >= elementRef.current.clientHeight - 100) {
      setAnimate(true);
    }
  }, [location]);

  const onRenderSkill = (item: SkillItem) => {
    return (
      <p key={item.content}><b>{item.title}: </b>{item.content}</p>
    )
  };

  return (
    <ExperienceSection ref={elementRef}>
      <AvatorWrapper>
        <UserAvator src={userPhoto} width="100px" height="100px"/>
      </AvatorWrapper>
      <SkillWrapper>
        <SkillList isActive={animate}>
          {personalContent.map(onRenderSkill)}
        </SkillList>
      </SkillWrapper>
    </ExperienceSection>
  )
}


export default SkillSection;
