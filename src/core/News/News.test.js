import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsItem from './';
let data = {
  objectID: 123,
  url: 'http//ssr-hacker-news.com/',
  title: 'No title',
  created_at: '2020-05-19',
  author: 'vaibhav katariya',
  points: 22,
};
const hideNews = jest.fn();
describe('Testing News Component', () => {
  const component = shallow(<NewsItem />);

  test('News  item Component exists', () => {
    expect(component.exists()).toBe(true);
  });

  test('News item should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('News component have all elements', () => {
    const component = shallow(<NewsItem data={data} hideNews={hideNews} />);
    expect(component).toMatchSnapshot();
    // expect(component.children().length).to.equal(2);
    // const actionContainer = component.find('.more-info-n-action');
    // expect(actionContainer.length).toEqual(1);
    // const hideContainer = actionContainer.find('.hide-action');
    // expect(hideContainer.length).toEqual(1);
  });

  // test('News item having hide function', () => {
  //   const mockCallBack = jest.fn();
  //   const component = mount(<NewsItem hideNews={mockCallBack} />);
  //   const wrapper = component.find('.hide-action');
  //   expect(wrapper.length).toEqual(1);
  //   // expect(container.length).toEqual(1);
  //   // container.simulate('click');
  //   // expect(mockCallBack.mock.calls.length).toEqual(1);
  // });
});
