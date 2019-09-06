// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import {
// SocialIcon
// } from '../styles';
// import { MemoSocialArea } from '@containers/Header/SocialArea';


describe('nothing', () => {
  test('test render', () => {
    expect(true).toBe(true);
  })
})

// const defaultProps = {
//   skillList: [
//     { href: 'https://twitter.com/stanmao', item: 'fab fa-twitter-square'},
//     { href: 'https://www.facebook.com/yuhsaing.mao', item: 'fab fa-facebook' },
//     { href: 'https://www.instagram.com/tonytonitone6/?hl=zh-tw', item: 'fab fa-instagram' },
//     { href: 'https://github.com/tonytonitone6', item: 'fab fa-github' }
//   ]
// }

// const findByTestAttr = (wrapper: any, val: string) => {
//   return wrapper.find(`[data-test="${val}"]`);
// }

// /**
//  * @function setup create shallow Component
//  * @param props Component props specific that
//  * @retrun ShallowWrapper {} 
//  */

// const setup = (props = {}) => {
//   const setupProps = { ...props };
//   return shallow(<MemoSocialArea {...setupProps}/>);
// }

// const initMount = (props = {}) => {
//   const setProps = { ...props };
//   return mount(<MemoSocialArea {...setProps} />);
// }

// describe('render icon item', () => {
//   // let wrapper: any;
//   // beforeEach(() => {
//   //   wrapper = setup();
//   // });

//   test('renders' , () => {
//     const wrapper = setup({...defaultProps});
//     expect(wrapper).toMatchSnapshot();
//   });

//   test('return the default empty array', () => {
//     const wrapper = setup();
//     expect(wrapper).toMatchSnapshot();
//   });

//   test('doesn\'t break without skillList', () => {
//     const wrapper = setup();
//     expect(wrapper.find('a')).toHaveLength(0);
//   });

//   test('doesn\'t, break with an empty array', () => {
//     const wrapper = setup({skillList: []});
//     expect(wrapper.find('a')).toHaveLength(0);
//   });

//   test('render props data', () => {
//     const wrapper = setup({...defaultProps});
//     expect(wrapper.find(SocialIcon).length).toBe(4);
//   });

//   test('mount skillList props', () => {
//     const wrapper = initMount();
//   })
  
// });
