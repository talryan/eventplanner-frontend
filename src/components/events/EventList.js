import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchClientEvents} from '../../actions/eventActions'


class EventList extends Component {
    componentDidMount() {
        this.props.fetchClientEvents()
    }       
    render() {
       
        // EventList = ({ client, events }) => {
        console.log(this.props.events)
        return (
            <div>
                <h1>events List:</h1>
                {this.props.events.map(event => 
                    <ul key={event.id}>
                        <li >
                        <Link to= {`clients/${event.client_id}/events/${event.id}`}>
                        
                            {event.date} - {event.time}
                        
                        </Link>
                        </li>
                    </ul>
            )}
            </div>
        );
    
    };
}
const mapStateToProps = state => {
    return { events: state.events }
}

export default connect(mapStateToProps, {fetchClientEvents})(EventList);