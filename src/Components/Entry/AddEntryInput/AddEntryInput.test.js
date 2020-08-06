import React from 'react';
import { shallow } from 'enzyme';
import AddEntryInput from './AddEntryInput';

describe('AddEntryInput', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AddEntryInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
