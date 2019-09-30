import React, { FunctionComponent, useState, useMemo } from 'react';
import {MemoSocialArea} from './SocialArea';
import {useMenuValue} from '@context/index'
import {
  PersonInfo,
  Avator,
  ArrowIcon
} from './styles';

import ArrowLogo from '../../images/down-arrow.png'

const SocialContent: FunctionComponent = () => {
  const [skillList, setSkillList] = useState([
    {href: 'https://twitter.com/stanmao', item: 'fab fa-twitter-square'},
    {href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook'},
    {
      href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw',
      item: 'fab fa-instagram',
    },
    {href: 'https://github.com/tonytonitone6', item: 'fab fa-github'},
  ]);

  const [{refs}, ignoreDispatch] = useMenuValue();

  const moveToNextPage = (): void => {
    refs[0].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const memoSkillList = useMemo(() => skillList, []);


  return (
    <PersonInfo>
      <h1>Stan Mao</h1>
      <p>back end Engineer</p>
      <Avator />
      <MemoSocialArea skillList={memoSkillList} />
      <ArrowIcon 
        src={ArrowLogo} 
        onClick={moveToNextPage}
      />
    </PersonInfo>
  )
}


export default SocialContent;