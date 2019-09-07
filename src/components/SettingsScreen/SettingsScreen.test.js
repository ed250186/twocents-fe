import React from 'react';
import { shallow } from 'enzyme';
import { SettingsScreen } from './SettingsScreen';

describe('SettingsScreen', () => {

  it('should match to snapshot', () => {
    const component = shallow(<SettingsScreen/>)
    expect(component).toMatchSnapshot()
  });
  
});