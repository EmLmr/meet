import React, { Component } from 'react';

import { Nav, Container } from 'react-bootstrap';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

import logo from './img/logo.png';
import './App.css';
import './nprogress.css';

class App extends Component {
    state = {
        events: [],
        locations: [],
        currentLocation: 'all',
        numberOfEvents: 32,
        showWelcomeScreen: undefined,
    };

    async componentDidMount() {
        const { numberOfEvents } = this.state;
        this.mounted = true;
        const accessToken = localStorage.getItem('access_token');
        const isTokenValid = (await checkToken(accessToken)).error ? false : true;
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        if ((code || isTokenValid) && this.mounted) {
            getEvents().then((events) => {
                if (this.mounted) {
                    this.setState({ events: events.slice(0, numberOfEvents), locations: extractLocations(events) });
                }
            });
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    updateEvents = (location, numberOfEvents) => {
        getEvents().then((events) => {
            const locationEvents =
                location === 'All Cities'
                    ? events.slice(0, numberOfEvents)
                    : events.filter((event) => event.location === location);
            this.setState({
                events: locationEvents.slice(0, numberOfEvents),
                currentLocation: location,
                numberOfEvents: numberOfEvents,
            });
        });
    };

    updateNumberOfEvents(eventNumber) {
        this.setState({ numberOfEvents: eventNumber });
        const { currentLocation } = this.state;
        this.updateEvents(currentLocation, eventNumber);
    }

    render() {
        if (this.state.showWelcomeScreen === undefined) return <div className="App" />;

        return (
            <Container className="App">
                <Nav className="navbar justify-content-center" bg="black">
                    <Nav.Link href="#home">
                        <img src={logo} className="nav-logo" alt="The DevUps logo" />
                    </Nav.Link>
                    {!navigator.onLine ? (
                        <WarningAlert text="No internet connection! Please connect to the internet for an updated list of events." />
                    ) : (
                        <WarningAlert text="" />
                    )}
                </Nav>

                <CitySearch
                    locations={this.state.locations}
                    updateEvents={this.updateEvents}
                    events={this.state.events}
                />
                <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
                <EventList events={this.state.events} />
                <WelcomeScreen
                    showWelcomeScreen={this.state.showWelcomeScreen}
                    getAccessToken={() => {
                        getAccessToken();
                    }}
                />
            </Container>
        );
    }
}

export default App;
