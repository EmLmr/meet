Feature: Show/Hide events details

  Scenario: An event element is collapsed by default
    Given an event element is collapsed by default
    When user is browsing the list of events
    Then they will only see general information about the events

  Scenario: User can expand an event to see its details
    Given a user wanted to see more details about an event
    When user clicks/taps a “show details” button
    Then the user will see more details about said event

  Scenario: User can collapse an event to hide its details
    Given a user has revealed an event’s details
    When user clicks/taps a “hide details” button
    Then the event’s details are hidden again (back to default state)