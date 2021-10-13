import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    };

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'yellow';
    }
    getStyle = () => {
        return {
            color: this.color,
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
        };
    };
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
    getStyle = () => {
        return {
            color: this.color,
            fontWeight: 'bold',
            fontSize: '18px',
            fontFamily: 'Montserrat',
        };
    };
}

export { InfoAlert, ErrorAlert };
