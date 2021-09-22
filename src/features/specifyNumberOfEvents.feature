Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given user has opened the app
    When the list of events is loaded
    Then there will be 32 events displayed by default

  Scenario: User can change the number of events they want to see
    Given user wants to display a different number of events
    When user inputs a different number in field “Number of events:”
    Then the said number of events will be displayed
