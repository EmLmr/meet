import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

import logo from './img/logo.png';
import './App.css';
import './nprogress.css';

class App extends Component {
    state = {
        events: [],
        locations: [],
        currentLocation: 'all',
        numberOfEvents: 32,
    };

    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({
                    events: events.slice(0, this.state.numberOfEvents),
                    locations: extractLocations(events),
                });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    updateEvents = (location, eventCount) => {
        this.mounted = true;
        getEvents().then((events) => {
            const locationEvents =
                location === 'all' && eventCount === 0
                    ? events
                    : location !== 'all' && eventCount === 0
                    ? events.filter((event) => event.location === location)
                    : events.slice(0, eventCount);
            if (this.mounted) {
                this.setState({
                    events: locationEvents,
                    numberOfEvents: eventCount,
                });
            }
        });
    };

    render() {
        return (
            <div className="App">
                <div className="nav-logo">
                    <img src={logo} className="logo d-inline-block align-top" alt="The DevUps logo" />
                </div>
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
                <EventList events={this.state.events} />
            </div>
        );
    }
}

export default App;
