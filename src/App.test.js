import React from 'react';
import { shallow } from 'enzyme';
import App from './ServerApp';
describe('Test Root Component', () => {
  const component = shallow(<App />);

  test('App Component exists', () => {
    expect(component.exists()).toBe(true);
  });

  it('App renders without crashing', () => {
    component;
  });

  test('App should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
