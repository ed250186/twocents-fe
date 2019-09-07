import React from 'react';
import { shallow } from 'enzyme';
import { LogInScreen } from './LogInScreen';

describe('LogInScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<LogInScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});