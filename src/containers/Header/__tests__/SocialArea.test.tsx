import React from 'react';
import { render } from '@testing-library/react';


import {
  SocialIcon,
  SocialArea
} from '../styles';
import {
  MemoSocialArea
} from '@containers/Header/SocialArea';


const defaultProps = {
  skillList: [
    { href: 'https://twitter.com/stanmao', item: 'fab fa-twitter-square'},
    { href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook' },
    { href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw', item: 'fab fa-instagram' },
    { href: 'https://github.com/tonytonitone6', item: 'fab fa-github' }
  ]
}

const initialComponent = (props = {}) => {
  const settingProps = { ...props, ...defaultProps };
  return render(<MemoSocialArea {...settingProps} />);
}


describe('render icon', () => {

  it('renders', () => {
    const wrapper = initialComponent({name: 'test'});
    expect(wrapper).toMatchSnapshot();
  });

  it('return the default empty array', () => {
    const wrapper = initialComponent();
    expect(wrapper).toMatchSnapshot();
  });
  

  it('should return target icon', () => {
    const { queryByText } = initialComponent();
    const icon = queryByText('https://twitter.com/stanmao');
  });

  it('doesn\'t break without skillList', () => {
    const { container } = initialComponent();
    const wrapper = container.getAttribute('data-test');
    console.log(wrapper);
  });
  

  // it('render icon list', () => {
  //   const { container } = initialComponent();
  //   const IconNode = container.querySelectorAll('#test-icon');
  //   expect(IconNode.length).toBe(defaultProps.skillList.length);
  // })
});