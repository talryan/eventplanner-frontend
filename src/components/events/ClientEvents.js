import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchClientEvents} from '../../actions/eventActions'
import DisplayDate from '../DisplayDate'
import EventForm from '../events/EventForm'
// import Client from '../../components/clients/Client'

class ClientEvents extends Component {
    componentDidMount() {
        this.props.fetchClientEvents(this.props.client.id)
    }       
    filterEvents = () => {
        return this.props.events.filter(
            event => event.client_id === this.props.client.id
        )
    }
    displayForm = () => {
        console.log("click")
        return(
        <div>
           
        {/* <EventForm /> */}
        </div>
        )
    }

    render() {
      
        return (
            <div className='client-events'>
                <h1> Client Info</h1>
             
                <h1>Event History:</h1>
                <button onClick = {this.displayForm}> Add Event</button>
                <EventForm hidden ='true' clientId = {this.props.client.id}/>
                <h4> add conditional for no events to display no events</h4> 
                {this.filterEvents().map(event => 
                    <ul key={event.id}>
                        <li >
                        <Link to= {`${this.props.routeInfo.location.pathname}/events/${event.id}`}> 
                     
                            {DisplayDate(event.date)} - {event.event_name}
                        
                        </Link>
                        </li>
                    </ul>
                    
            )}

            </div>
        );
    
    };
}


export default connect(null, {fetchClientEvents})(ClientEvents);