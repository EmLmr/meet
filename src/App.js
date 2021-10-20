import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api'; // , checkToken, getAccessToken
import { WarningAlert } from './Alert';
// import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';

import logo from './img/logo.png';
import './App.css';
import './nprogress.css';

class App extends Component {
    state = {
        events: [],
        locations: [],
        currentLocation: 'all',
        numberOfEvents: 32,
        // showWelcomeScreen: undefined,
    };

    // async componentDidMount() {
    //     this.mounted = true;
    //     const accessToken = localStorage.getItem('access_token');
    //     const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    //     const searchParams = new URLSearchParams(window.location.search);
    //     const code = searchParams.get('code');
    //     this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    //     if ((code || isTokenValid) && this.mounted) {
    //         getEvents().then((events) => {
    //             if (this.mounted) {
    //                 this.setState({ events, locations: extractLocations(events) });
    //             }
    //         });
    //     }
    // }

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

    updateEvents = (location, numberOfEvents) => {
        getEvents().then((events) => {
            const locationEvents =
                location === 'all'
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

    getData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
            const number = events.filter((event) => event.location === location).length;
            const city = location.split(', ').shift();
            return { city, number };
        });
        return data;
    };

    render() {
        // if (this.state.showWelcomeScreen === undefined) return <div className="App" />;

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
                    updateEvents={this.updateEvents}
                    locations={this.state.locations}
                    events={this.state.events}
                />
                <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />

                <div className="data-vis-wrapper">
                    <EventGenre events={this.state.events} />
                    <ResponsiveContainer height={400}>
                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis type="category" dataKey="city" name="city" />
                            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter data={this.getData()} fill="#2ee0eb" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>

                <EventList events={this.state.events} />
                {/* <WelcomeScreen
                    showWelcomeScreen={this.state.showWelcomeScreen}
                    getAccessToken={() => {
                        getAccessToken();
                    }}
                /> */}
            </Container>
        );
    }
}

export default App;
