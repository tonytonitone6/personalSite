import React from 'react';
import { shallow } from 'enzyme';

import { MemoSocialArea } from '@containers/Header/SocialArea';


const defaultProps = {
  skillList: [
    {
      href: 'https://twitter.com/stanmao',
      item: 'fab fa-twitter-square'
    }
  ]
}

/**
 * @function setup create shallow Component
 * @param props Component props specific that
 * @retrun ShallowWrapper {} 
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MemoSocialArea {...setupProps}/>);
}

describe('render icon item', () => {
  it('should ', () => {
    const component = setup();
  });
  
});
