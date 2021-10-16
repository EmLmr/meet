import React, { Component } from 'react';

import { Container, Row, Badge, Button } from 'react-bootstrap';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails,
        });
    }

    convertDate(date) {
        const newDate = new Date(date).toString().slice(3, 21);
        return newDate;
    }

    render() {
        let event = this.props.event;
        return (
            <Container className="event event-container">
                <Row>
                    <h1 className="event-title">{event.summary}</h1>
                </Row>
                <Row>
                    <Badge className="event-status">{event.status}</Badge>
                </Row>
                <Row className="basic-info">
                    <h2 className="event-location">{event.location}</h2>
                </Row>
                <Row>
                    <h2 className="event-scheduled-start">
                        From: {this.convertDate(event.start.dateTime)} ({event.start.timeZone})
                    </h2>
                    {this.state.showDetails === true && <p className="event-details">{event.description}</p>}
                </Row>
                <Row>
                    <Button bsPrefix="custom-btn" className="details-btn" onClick={this.toggleDetails}>
                        {!this.state.showDetails ? 'Show details' : 'Close'}
                    </Button>
                </Row>
            </Container>
        );
    }
}

export default Event;
