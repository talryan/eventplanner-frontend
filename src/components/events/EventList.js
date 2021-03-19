import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchClientEvents} from '../../actions/eventActions'



class EventList extends Component {
    componentDidMount() {
        this.props.fetchClientEvents(this.props.client.id)
    }       
    filterEvents = () => {
        return this.props.events.filter(
            event => event.client_id === this.props.client.id
        )
    }
    render() {
 
        // EventList = ({ client, events }) => {
     
        return (
            <div>
                <h1>events List:</h1>
                {this.filterEvents().map(event => 
                    <ul key={event.id}>
                        <li >
                        <Link to= {`${this.props.routeInfo.location.pathname}/${event.id}`}>
                        
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