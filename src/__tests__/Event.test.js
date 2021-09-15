import React from 'react';
import { shallow } from 'enzyme';

import Event from "../Event";
import { mockData } from '../mock-data';

// FEATURE 2  
describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  // Scenario 1
  test('render <Event /> component', () => {
    expect(EventWrapper.find('.event-container')).toHaveLength(1);
  });

  
  test('render basic event information', () => {
    expect(EventWrapper.find('.basic-info')).toHaveLength(1);
  });

 // Scenario 2
  test('display "show details" button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  // Scenario 3 
  test('toggle event details on click', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });
});