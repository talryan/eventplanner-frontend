//this will be the container = data + methods

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../actions/eventActions'
import {
    Link
  } from "react-router-dom";



class EventsContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div>
                <li>
              
                </li>
                Put Event Calendar Here <br />
                 <Link to="/events/new">New Event</Link> <br />
            </div>
        );
    }
}

export default connect(null, {fetchEvents})(EventsContainer);