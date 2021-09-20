import React, { Component } from 'react';

import { Container, Row, Badge, Button} from 'react-bootstrap';

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
  render() {
    let event = this.props.event;
    return (
      <Container className="event event-container">
        <Row>
        <h2 className="event-title">{event.summary}</h2>
        </Row>
        <Row>
        <Badge className="event-status">{event.status}</Badge>
        </Row>
        <Row className="basic-info">
        <h5 className="event-location">{event.location}</h5>
          <h5 className="event-scheduled-start">
            From: {event.start.dateTime} ({event.start.timeZone})
          </h5>
          {this.state.showDetails === true 
          && (
             <h5 className="event-scheduled-end">
             Ends: {event.end.dateTime} ({event.end.timeZone})
             </h5>) 
          && (
            <p className="event-details">{event.description}</p>
          )}
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