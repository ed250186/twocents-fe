import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {

  it('should match to snapshot', () => {
    const component = shallow(<SearchBar/>)
    expect(component).toMatchSnapshot()
  });
  
});