import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

// FEATURE 3 
describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventCount={() => { }} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(
      NumberOfEventsWrapper.find('.event-count-input').prop('value')
    ).toBe(numberOfEvents);
  });
 
  test('change number of events displayed based on input value', () => {
    const inputValue = { target: { value: 32 } };
    NumberOfEventsWrapper.find('.event-count-input').simulate(
      'change',
      inputValue
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });
  
});