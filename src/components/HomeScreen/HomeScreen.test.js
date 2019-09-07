import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';

describe('HomeScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<HomeScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});