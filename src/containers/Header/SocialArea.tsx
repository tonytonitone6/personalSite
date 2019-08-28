import React, { memo } from 'react';
import PropTypes from 'prop-types';

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
        data-test="guess-instructions"
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

  SocialAreaComponent.defaultProps = {
    skillList: []
  }

  SocialAreaComponent.propTypes = {
    skillList: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired
      })
    ).isRequired
  }

  
  export const MemoSocialArea = memo(SocialAreaComponent)
