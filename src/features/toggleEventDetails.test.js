// FEATURE 2
import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';
import { mockData } from '../mock-data';
import Event from "../Event";


const feature = loadFeature('./src/features/toggleEventDetails.feature');

defineFeature(feature, test => {
  // Scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('an event element is collapsed by default', () => {
      AppWrapper = mount(<App />);
    });

    when('user is browsing the list of events', () => {

    });

    then('they will only see general information about the events', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });

    // Scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
      let EventWrapper;
      given('a user wanted to see more details about an event', () => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
      });

      when('user clicks/taps a “show details” button', () => {
        EventWrapper.find('.details-btn').at(0).simulate("click");
      });

      then('the user will see more details about said event', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(1);
      });
    });
  
      //Scenario 3
      test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('a user has revealed an event’s details', () => {
          EventWrapper = shallow(<Event event={mockData[1]} />);
          EventWrapper.setState({
            showDetails: true,
          });
          expect(EventWrapper.find('.event-details')).toHaveLength(1);
        });

        when('user clicks/taps a “hide details” button', () => {
          EventWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the event’s details are hidden again (back to default state)', () => {
          expect(EventWrapper.find('.event-details')).toHaveLength(0);
          EventWrapper.setState({
            showDetails: false,
          });
        });
      });

});

