import React from 'react';
import { shallow } from 'enzyme';
import TaskButtons from './TaskButtons';

describe('TaskButtons', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TaskButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
