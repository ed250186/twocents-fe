import React from 'react';
import { shallow } from 'enzyme';
import { AboutScreen } from './AboutScreen';

describe('AboutScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<AboutScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});