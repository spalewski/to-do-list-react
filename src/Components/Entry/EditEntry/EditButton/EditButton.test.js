import React from 'react';
import { shallow } from 'enzyme';
import EditButton from './EditButton';

describe('EditButton', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<EditButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
