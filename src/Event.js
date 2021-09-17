import React, { Component } from "react";

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
      <div className="event event-container">
        <h2 className="event-title">{event.summary}</h2>
        <p>{event.status}</p>
        <div className="basic-info">
          <p className="event-location">{event.location}</p>
          <p className="event-scheduled-start">
            From: {event.start.dateTime} ({event.start.timeZone})
          </p>
          {this.state.showDetails === true 
          && (
             <h3 className="event-scheduled-end">
             From: {event.end.dateTime} ({event.end.timeZone})
             </h3>) 
          && (
            <p className="event-details">{event.description}</p>
          )}
        </div>
        <button className="details-btn" onClick={this.toggleDetails}>
          {!this.state.showDetails ? 'Show details' : 'Close'}
        </button>
      </div>
    );
  }
}

export default Event;