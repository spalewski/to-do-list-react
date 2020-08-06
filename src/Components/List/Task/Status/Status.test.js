import React from 'react';
import { shallow } from 'enzyme';
import Status from './Status';

describe('Status', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Status />);
    expect(wrapper).toMatchSnapshot();
  });
});
