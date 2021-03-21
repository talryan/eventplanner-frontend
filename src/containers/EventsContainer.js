//this will be the container = data + methods

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../actions/eventActions'
import Events from '../components/events/Events'



class EventsContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div className='events-container'> 
              <Events />
             
                 
            </div>
        );
    }
}

export default connect(null, {fetchEvents})(EventsContainer);