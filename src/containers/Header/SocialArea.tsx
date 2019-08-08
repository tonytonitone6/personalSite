import React, { memo } from 'react';

import {
  SocialIcon,
  SocialArea
} from './styles';


interface TypeProps {
  href: string;
  item: string;
}

const SocialAreaComponent = (props: { skillList:  TypeProps[]}) => {
  const menuList = props.skillList;

  const onRenderSocialList = (item: TypeProps) => {
    return (
      <SocialIcon 
        key={item.href}
        target="_blank"
        href={item.href}
      >
        <i className={item.item} />
      </SocialIcon>
    )
  }
  
  return (
    <SocialArea>
      { menuList.map(onRenderSocialList) }
    </SocialArea>
    )
  }
  
  export const MemoSocialArea = memo(SocialAreaComponent)
