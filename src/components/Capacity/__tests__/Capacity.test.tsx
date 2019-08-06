import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Capacity from '@components/Capacity';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @function setUp
 * @param props <object>
 * @param state <any>
 * @returns <shallowWrapper>
 */

const setUp = (props: null | any = {}, state = {}) => {
  const wrapper = shallow(<Capacity {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}


const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
}


test('render without error', () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = setUp();
  const countDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(countDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setUp();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('click button increment counter', () => {
  const counter = 7;
  const wrapper = setUp(null, { counter });

  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  const count = wrapper.state('counter');
  expect(count).toBe(8);

  const countDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(countDisplay.text()).toContain(counter + 1);
});

test('click button to decrement counter', () => {
  const counter = 1;
  const wrapper = setUp(null, { counter });
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  const count = wrapper.state('counter');
  expect(count).toBeLessThan(0);
})



