//this will be the container = data + methods

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../actions/eventActions'


class EventsContainer extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }
    render() {
        return (
            <div>
                Shit about events
            </div>
        );
    }
}

export default connect(null, {fetchEvents})(EventsContainer);