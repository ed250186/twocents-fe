import React from 'react';
import { shallow } from 'enzyme';
import { MenuScreen } from './MenuScreen';

describe('MenuScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<MenuScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});