import React from 'react';
import { shallow } from 'enzyme';
import { UserScreen } from './UserScreen';

describe('UserScreen', () => {

  let wrapper, instance;
  let props =  {
    navigation: {
      navigate: jest.fn()
    },
    allRecommendations: [],
    LogOutPopup: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<UserScreen {...props} />);
  })

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});