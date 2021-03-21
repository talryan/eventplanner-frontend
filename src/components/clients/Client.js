import React from 'react';
import { connect } from 'react-redux'
 import {Link} from 'react-router-dom'
  import EventForm from '../events/EventForm'

  class Client extends React.Component {
    state = {
        id: parseInt(this.props.routeInfo.match.params.id),
        showEvent: false
    
    }

    client = () => this.props.clients.find(c => c.id === this.state.id)
    events = () => {
       return  this.props.events.filter(event => event.client_id === this.state.id)
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
                <h2> Contact Infomation</h2>
                   <h3>  First Name: </h3><h4>{this.client().first_name} </h4>
                   <h3>  Last Name: </h3><h4>{this.client().last_name} <br /></h4>
                   <h3> Email:</h3><h4> {this.client().email}<br /></h4>
                   <h3> Phone Number:</h3><h4> {this.client().phone_number}<br /></h4>
                   <h3>  Company:</h3><h4> {this.client().company}</h4>
                  <h2>Events:</h2> 

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