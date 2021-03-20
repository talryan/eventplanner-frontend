import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchClientEvents} from '../../actions/eventActions'



class ClientEvents extends Component {
    componentDidMount() {
        this.props.fetchClientEvents(this.props.client.id)
    }       
    filterEvents = () => {
        return this.props.events.filter(
            event => event.client_id === this.props.client.id
        )
    }
    render() {
     
        return (
            <div>
                <h1>Event History:</h1>
                <h4> add conditional for no events to display no events</h4> 
                {this.filterEvents().map(event => 
                    <ul key={event.id}>
                        <li >
                        <Link to= {`${this.props.routeInfo.location.pathname}/${event.id}`}>
                        
                            {event.date} - {event.event_name}
                        
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

export default connect(mapStateToProps, {fetchClientEvents})(ClientEvents);