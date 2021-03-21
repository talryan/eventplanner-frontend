import React from 'react';
import { connect } from 'react-redux'
import ClientEvents from '../events/ClientEvents'
 import {Link} from 'react-router-dom'
  import EventForm from '../events/EventForm'

  class Client extends React.Component {
    state = {
        id: parseInt(this.props.routeInfo.match.params.id),
        showEvent: false
    
    }

    client = () => this.props.clients.find(c => c.id === this.state.id)
    events = () => {
       return  this.props.events.filter(event => event.client_id == this.state.id)
    }

    handleOnClick = () => {
        this.setState(prevState => ({
            showEvent: !prevState.showEvent
        }))
    }

    mapEvents = () => {
        
        if (this.events().length === 0) {
            return <h1> No Events</h1>
        }
        else {
        return this.events().map(event => {
            return <div>
                <Link to= {`${this.props.routeInfo.match.url}/events/${event.id}`}> {event.event_name}</Link> <br /> 
                </div>
         }
        )
     }
        
    }
    render() {
    return (
        <div className='client-show'> 
            <div>
          First Name: {this.client().first_name} Last Name: {this.client().last_name}
                {this.mapEvents()}
               </div>
        
    

        <button onClick={this.handleOnClick} > Add Event</button>
        {this.state.showEvent ? <EventForm clientId = {this.client().id} /> : null}

        
    
        </div>
    );
    }
};

const mapStateToProps = state => {
    return { clients: state.clients, 
        events: state.events
    }
}
  

export default connect(mapStateToProps)(Client);