import React from 'react';
import { shallow, mount } from 'enzyme';
import Navigation from './';
describe('Testing Navigation Component', () => {
  const component = shallow(<Navigation />);

  test('Navigation Component exists', () => {
    expect(component.exists()).toBe(true);
  });

  test('Navigation should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('Navigation has two buttons', () => {
    const mockCallBack = jest.fn();
    const component = mount(<Navigation />);
    const container = component.find('Button');
    expect(container.length).toEqual(2);
    // container.forEach((button) => {
    //   button.simulate('click');
    //   expect(mockCallBack.mock.calls.length).toEqual(1);
    // });
  });
});
