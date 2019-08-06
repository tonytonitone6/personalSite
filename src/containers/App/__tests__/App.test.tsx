import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';
// import 'jest-styled-components'

import App from '../../App';


Enzyme.configure({ adapter: new EnzymeAdapter()});

test('render without error ', () => {
  const wrapper = shallow(<App />);
})
