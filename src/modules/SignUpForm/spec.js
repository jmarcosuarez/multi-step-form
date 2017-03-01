import React from 'react';
import SignUpForm from './presenter';
import { shallow } from 'enzyme';

describe('SignUpForm', () => {
  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<SignUpForm {...props} />);
    expect(element.find('.track')).to.have.length(2);
  });
});
