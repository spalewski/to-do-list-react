import React from 'react';
import { shallow } from 'enzyme';
import EditEntry from './EditEntry';

describe('EditEntry', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<EditEntry />);
    expect(wrapper).toMatchSnapshot();
  });
});
