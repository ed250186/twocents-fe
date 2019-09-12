import React from 'react';
import { shallow } from 'enzyme';
import { LogInScreen } from './LogInScreen';

describe('LogInScreen', () => {

  let wrapper, instance;
  let props =  {
    navigation: {
      navigate: jest.fn()
    },
    allRecommendations: []
  }

  beforeEach(() => {
    wrapper = shallow(<LogInScreen {...props} />);
  })

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});