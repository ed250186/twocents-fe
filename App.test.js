import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
jest.mock("react-navigation", () => {
  return {}
});
jest.mock("react-navigation-stack", () => {
  return {}
});


describe('App', () => {
  let wrapper, instance;
  const createTestProps = props => ({
    navigation: {
      navigate: jest.fn()
    },
    allRecommendations: [],
    ...props
  })

  beforeEach(() => {
    props = createTestProps({});
    wrapper = shallow(<App {...props} />);
  })

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});