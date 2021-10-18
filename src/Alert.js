import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.height = null;
        this.fontFamily = 'Montserrat';
        this.fontSize = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            height: this.height,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
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
        this.height = '40px';
        this.fontSize = '15px';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.height = '20px';
        this.fontSize = '15px';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'orange';
        this.height = '40px';
        this.fontSize = '20px';
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };
