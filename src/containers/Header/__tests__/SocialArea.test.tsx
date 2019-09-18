import React from 'react';
import {render} from '@testing-library/react';

import {MemoSocialArea} from '@containers/Header/SocialArea';
import {
  SocialArea,
  SocialIcon
} from '../styles';

import 'jest-styled-components';

const defaultProps = {
  skillList: [
    {href: 'https://twitter.com/stanmao', item: 'fab fa-twitter-square'},
    {href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook'},
    {
      href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw',
      item: 'fab fa-instagram',
    },
    {href: 'https://github.com/tonytonitone6', item: 'fab fa-github'}
  ],
}

const initialComponent = (props = {}) => {
  const settingProps = {...props}
  return render(<MemoSocialArea {...settingProps} />)
}

describe('render icon', () => {
  it('should return target icon', () => {
    const {queryByText} = initialComponent(defaultProps)
    const icon = queryByText('https://twitter.com/stanmao')
  })

  it('render icon list', () => {
    const {getByTestId} = initialComponent(defaultProps)
    expect(getByTestId('renders-socialArea').children.length).toBe(defaultProps.skillList.length);
  })

  it('pass zero props to render icon', () => {
    const wrapper = initialComponent({...defaultProps});
    expect(wrapper).toMatchSnapshot();
  })

  it('test', () => {
    const {getByTestId, container, debug} = initialComponent()
    // debug(container);
    // debug(getByTestId('test-icon'))
    // expect(getByTestId('renders-socialArea')).toHaveStyleRule

  })
})
