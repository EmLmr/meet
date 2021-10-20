import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32, // default number of events displayed
        errorText: '',
    };

    handleInputChanged = (e) => {
        const value = e.target.value;

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
            this.props.updateNumberOfEvents(value);
        }
    };

    render() {
        const { numberOfEvents } = this.state;
        return (
            <div className="numberOfEvents">
                <label>Number of results:</label>
                <input
                    className="event-count-input"
                    type="number"
                    placeholder="1-32"
                    value={numberOfEvents}
                    onChange={this.handleInputChanged}
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents;
