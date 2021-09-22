// FEATURE 3
import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import { mockData } from '../mock-data';
import Event from "../Event";
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  // Scenario 1
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

    let AppWrapper;
    given('user has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the list of events is loaded', () => {

    });

    then('there will be 32 events displayed by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
});

// Scenario 2
test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;
    given('user wants to display a different number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('user inputs a different number in field “Number of events:”', () => {
      AppWrapper.find('.event-count-input').simulate('change', { target: { value: 1 }});
    });

    then('the said number of events will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-item')).toHaveLength(1);
    });
});

});