import React, { Component } from 'react';
import Event from './Event';

import {Row, Col} from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row>
        <Col>
        <ul className="EventList">
      {events.map(event =>
        <li key={event.id}>
          <Event event={event} />
        </li>
      )}
    </ul>
        </Col>
      </Row>
     
    );
  }
}

export default EventList;