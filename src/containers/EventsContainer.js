//this will be the container = data + methods

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../actions/eventActions'
import EventForm from '../components/events/EventsForm'

class EventsContainer extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }
    render() {
        return (
            <div>
                <EventForm />
            </div>
        );
    }
}

export default connect(null, {fetchEvents})(EventsContainer);