import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32 // default number of events displayed
  };

  updateEventCount = (eventCount) => {
    const value = eventCount.target.value;
    this.props.updateEventCount(null, value);

    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: ''
      });
    }
    else {
      this.setState({
        numberOfEvents: value
      });
    }

  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <p>Number of results:</p>
        <input
          className="event-count-input"
          type="number"
          placeholder="0"
          value={numberOfEvents}
          onChange={this.updateEventCount}
        />
      </div>
    );
  }
}

export default NumberOfEvents;