import React from 'react';
import { shallow } from 'enzyme';
import { SearchScreen } from './SearchScreen';

describe('SearchScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<SearchScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});