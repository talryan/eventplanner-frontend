import React from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../../actions/eventActions'
import DisplayDate from '../DisplayDate'

const Events = ({events}) => {
    return (
        <div>
            <h1>Events</h1>
            {events.map(event => 
                <ul key={event.id}>
                    <li >
                    {DisplayDate(event.date)} - {event.event_name}

                    </li>
                </ul>
        )}
        </div>
    );
};



const mapStateToProps = state => {
    return { events: state.events }
}

export default connect(mapStateToProps, {fetchEvents})(Events);