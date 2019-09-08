import React from 'react';
import { shallow } from 'enzyme';
import { SearchBarCallAPI } from './SearchBarCallAPI';

describe('SearchBarCallAPI', () => {

  it('should match to snapshot', () => {
    const component = shallow(<SearchBarCallAPI/>)
    expect(component).toMatchSnapshot()
  });
  
});