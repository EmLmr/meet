import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32, // default number of events displayed
        errorText: '',
    };

    updateEventCount = (event) => {
        const value = event.target.value;
        this.props.updateEvents(null, value);

        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
                errorText: 'Please enter a valid number between 1 and 32.',
            });
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: '',
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