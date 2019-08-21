import React, { useRef, useEffect } from 'react';

import useLocation from '@hooks/useLocation';
import { 
  ExperienceSection ,
  AvatorWrapper,
  SkillList
} from './styles';


const SkillSection = () => {
  const [location, _]: any = useLocation();
  useEffect(() => {
    console.log(document.body.scrollHeight);
    
  }, [location])
  

  return (
    <ExperienceSection>
      <AvatorWrapper>
        123
      </AvatorWrapper>
      <SkillList>
        123
      </SkillList>
    </ExperienceSection>
  )
}


export default SkillSection;
