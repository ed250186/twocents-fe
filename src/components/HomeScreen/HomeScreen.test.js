import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';
// import {NavigationTestUtils} from "react-navigation/NavigationTestUtils";

describe('HomeScreen', () => {
  // NavigationTestUtils.resetInternalState();
  let wrapper, instance;
  const mockGeolocator = {
    getCurrentPosition: jest.fn()
  };
  const createTestProps = props => ({
    navigation: {
      navigate: jest.fn()
    },
    allRecommendations: [],
    ...props
  })

  beforeEach(() => {
    global.navigator.geolocation = mockGeolocator;
    props = createTestProps({});
    wrapper = shallow(<HomeScreen {...props} />);
  })

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call fetchRecommendations', () => {
    jest.spyOn(instance, "fetchRecommendations");
    expect(instance.fetchRecommendations).toHaveBeenCalledTimes(0)
    instance.componentDidMount()
    expect(instance.fetchRecommendations).toHaveBeenCalledTimes(1)
  })
  
});