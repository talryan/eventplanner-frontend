import React from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../../actions/eventActions'
import DisplayDate from '../DisplayDate'
import { Link } from 'react-router-dom'

const Events = ({events}) => {
    return (
          
        <div className= 'all-events-show'>
            <h1 className='events-show-h1'>Events</h1>
            {events.map(event => 
                <ul key={event.id}>
                    <li >
                    <h3><Link to= {`clients/${event.client_id}/events/${event.id}`}>
                     {DisplayDate(event.date)} - {event.event_name}
                    </Link></h3>
                    </li>
                </ul>
        )}
        </div>
    );
};



const mapStateToProps = state => {
    return { events: state.events }
}

// const mapStateToProps = ({events}, ownProps) => {
  
//     const tentativeStatus= events.filter(event => event.status === "Tentative").length
//     const confirmedStatus= events.filter(event => event.status === "Confirmed").length
//     const cancelledStatus= events.filter(event => event.status === "Cancelled").length
//     const closedStatus= events.filter(event => event.status === "Closed").length
  
//     return{tentativeStatus, confirmedStatus, cancelledStatus, closedStatus}
  
// }

export default connect(mapStateToProps, {fetchEvents})(Events);