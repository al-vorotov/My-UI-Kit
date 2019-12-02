import React from 'react';
import { shallow } from 'enzyme';

import ExpandButton from ".";

describe('ExpandButton', () => {
  it('should render without 💥', () => {
    const wrapper = shallow(<ExpandButton />);
    expect(wrapper).toBeTruthy();
  });
});
