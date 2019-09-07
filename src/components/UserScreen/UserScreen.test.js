import React from 'react';
import { shallow } from 'enzyme';
import { UserScreen } from './UserScreen';

describe('UserScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<UserScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});