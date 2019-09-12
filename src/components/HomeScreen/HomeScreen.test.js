import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen, mapStateToProps, mapDispatchToProps } from './HomeScreen';
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

  xit('should call fetchRecommendations', () => {
    jest.spyOn(instance, "fetchRecommendations");
    expect(instance.fetchRecommendations).toHaveBeenCalledTimes(0)
    instance.componentDidMount()
    expect(instance.fetchRecommendations).toHaveBeenCalledTimes(1)
  })

  describe('mapStateToProps', () => {

    it('allRecommendations should have a state of allRecommendations', () => {
      const mockState = {
        allRecommendations: 'allRecommendations'
      }
      const expected = {
        allRecommendations: 'allRecommendations'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('userLocation should have a state of userLocation', () => {
      const mockState = {
        userLocation: 'userLocation'
      }
      const expected = {
        userLocation: 'userLocation'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('loggedIn should have a state of loggedIn', () => {
      const mockState = {
        loggedIn: 'loggedIn'
      }
      const expected = {
        loggedIn: 'loggedIn'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  
});