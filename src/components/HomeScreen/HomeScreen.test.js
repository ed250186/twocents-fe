import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';
// import NavigationTestUtils from "react-navigation/NavigationTestUtils";

describe('HomeScreen', () => {
  // NavigationTestUtils.resetInternalState();
  let wrapper, instance;
  const mockGeolocator = {
    getCurrentPosition: jest.fn()
  };
  let props =  {
    navigation: {
      navigate: jest.fn()
    },
    allRecommendations: []
  }

  beforeEach(() => {
    global.navigator.geolocation = mockGeolocator;
    wrapper = shallow(<HomeScreen {...props} />);
  })

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});