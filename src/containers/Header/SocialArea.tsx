import React, { FunctionComponent, ReactChild, ReactElement } from 'react';

import {
  SocialIcon
} from './styles';


interface TypeProps {
  href: string;
  item: string;
}


export const SocialArea= (props: { skillList:  TypeProps[]}) => {
  return (
    <>123</>
    // <SocialIcon 
    //   key={item.href}
    //   target="_blank"
    //   href={item.href}
    // >
    //   <i className={item.item} />
    // </SocialIcon>
  )
}

