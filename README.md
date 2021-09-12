<h1>meetApp</h1> 

<p>meetApp is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.</p>

<h2>Key features</h2>
<ul>
  <li>Filter events by city.</li>
  <li>Show/hide event details.</li>
  <li>Specify number of events.</li>
  <li>Use the app when offline.</li>
  <li>Add an app shortcut to the home screen.</li>
  <li>View a chart showing the number of upcoming events by city</li>
</ul>

<h2>Technical Requirements</h2>
  <ul>
    <li> The app <em>must</em> be a React application.</li>
    <li> The app <em>must</em> be built using the TDD technique.</li>
    <li> The app <em>must</em> use the Google Calendar API and OAuth2 authentication flow.</li>
    <li>The app <em>must</em> use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
    <li> The app’s code <em>must</em> be hosted in a Git repository on GitHub.</li>
    <li> The app <em>must</em> work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.</li>
    <li> The app <em>must</em> display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.</li>
    <li> The app <em>must</em> pass Lighthouse’s PWA checklist.</li>
    <li> The app <em>must</em> work offline or in slow network conditions with the help of a service worker.</li>
    <li> Users <em>may</em> be able to install the app on desktop and add the app to their home screen on mobile.</li>
    <li>The app <em>must</em> be deployed on GitHub Pages.</li>
    <li> The API call <em>must</em> use React axios and async/await.</li>
    <li> The app <em>must</em> implement an alert system using an OOP approach to show information to the user.</li>
    <li> The app <em>must</em> make use of data visualization (recharts preferred).</li>
    <li>The app <em>must</em> be covered by tests with a coverage rate >= 90%.</li>
    <li> The app <em>must</em> be monitored using an online monitoring tool.</li>
  </ul>

<h2>User stories and Scenarios (with Gherkin syntax)</h2>

<h3>FEATURE 1: FILTER EVENTS BY CITY.</h3>
<em>
As a user, I should be able to filter events by city so that I can see all events happening in that specific city.
</em>
<h4>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.</h4>
Given user hasn’t searched for any city<br>
When the user opens the app<br>
Then the user should see a list of all upcoming events

<h4>Scenario 2: User should see a list of suggestions when they search for a city.</h4>
Given the main page is open<br>
When user starts typing in the city textbox<br>
Then the user should see a list of cities (suggestions) that match what they’ve typed

<h4>Scenario 3: user can select a city from the suggested list.</h4>
Given the user was typing “Berlin” in the city textbox<br>
And the list of suggested cities is showing<br>
When the user selects a city (e.g., “Berlin, Germany”) from the list<br>
Then their city should be changed to that city (i.e., “Berlin, Germany”)<br>
And the user should receive a list of upcoming events in that city


<h3>FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS</h3>
<em>
As a user, I should be able to show/hide details about an event so that I can know more about the event.
</em>
<h4>Scenario 1: An event element is collapsed by default.</h4>
Given an event element is collapsed by default<br>
When user is browsing the list of events<br>
Then they will only see general information about the events

<h4>Scenario 2: User can expand an event to see its details.</h4>
Given a user wanted to see more details about an event<br>
When user clicks/taps a “show details” button<br>
Then the user will see more details about said event

<h4>Scenario 3: User can collapse an event to hide its details.</h4>
Given a user has revealed an event’s details<br>
When user clicks/taps a “hide details” button <br>
Then the event’s details are hidden again (back to default state)

<h3>FEATURE 3: SPECIFY NUMBER OF EVENTS</h3>
<em>
As a user, I should be able to change the number of events to display so that I can see as many/few events as I want.
</em>
<h4>Scenario 1: When user hasn’t specified a number, 32 is the default number.</h4>
Given search results have just been displayed<br>
When user defines no specific number of events<br>
Then 32 events are displayed by default

<h4>Scenario 2: User can change the number of events they want to see.</h4>
Given a user wants to display a different number of events<br>
When user inputs a different number in field “Number of events:”<br>
Then the said number of events will be displayed

<h3>FEATURE 4: USE THE APP WHEN OFFLINE</h3>
<em>
As a user, I should be able to use the app offline so that I can use it from anywhere.
</em>
<h4>Scenario 1: Show cached data when there’s no internet connection.</h4>
Given the app should be usable offline<br>
When user wants to use the app<br>
Then the app will use cached data

<h4>Scenario 2: Show error when user changes the settings (city, time range).</h4>
Given the app should be usable offline<br>
When user wants to change any settings<br>
Then the app will show an error

<h3>FEATURE 5: DATA VISUALIZATION</h3>
</em>
As a user, I should be able to see a chart about upcoming events so that I can have a quick overview of events in my city.
</em>
<h4>Scenario 1: Show a chart with the number of upcoming events in each city.</h4>
Given the user is looking for events<br>
When user wants to see an overview of events in a city<br>
Then the user will have access to a chart for quick visualization
