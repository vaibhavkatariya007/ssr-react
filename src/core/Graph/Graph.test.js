import React from 'react';
import { shallow, mount } from 'enzyme';
import Graph from './';
describe('Testing Graph Component', () => {
  const component = shallow(<Graph data={{}} />);

  test('Graph Component exists', () => {
    expect(component.exists()).toBe(true);
  });
});
