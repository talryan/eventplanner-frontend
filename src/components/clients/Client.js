    import React from 'react';
    import { connect } from 'react-redux'
    import {Link} from 'react-router-dom'
    import EventForm from '../events/EventForm'
    import DisplayDate from '../DisplayDate'

    class Client extends React.Component {
        state = {
            id: parseInt(this.props.routeInfo.match.params.id),
            showEvent: false, 
          
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
                return <h1 className='no-events'> No Events</h1>
            }
            else {
                 return this.events().map(event => {
                    return <div className='event-map' key={event.id}>
                        
                    <h3> <Link to= {`${this.props.routeInfo.match.url}/events/${event.id}`}> {DisplayDate(event.date)} - {event.event_name} </Link> </h3><br />
                    
                    </div>
            }
            
            )
        }
            
        }
        render() {
        return (
            <div className='client-show'> 
                
                    <h2 className="w3-center w3-padding-64"><span className="w3-tag w3-wide"><strong>Contact Infomation:</strong></span></h2>
                    <h3 className= "contact"> <strong>Name:</strong> {this.client().first_name} {this.client().last_name} </h3>
                    <h3 className= "contact"> <strong>Email:</strong> {this.client().email} </h3>
                    <h3 className= "contact"> <strong>Phone Number:</strong> {this.client().phone_number}</h3> 
                    <h3 className= "contact"><strong>Company:</strong> {this.client().company_name}</h3>
                    <h2 className="w3-center w3-padding-64"><span className="w3-tag w3-wide"><strong>Events:</strong></span></h2> 

                    {this.mapEvents()}
             
                   
        

            <button className="btn" onClick={this.handleOnClick} > Add New Event</button>
            {this.state.showEvent ? <EventForm clientId = {this.client().id} /> : null}

            
        
            </div>
        );
        }
};

const mapStateToProps = stateFromTheStore => {
    return { clients: stateFromTheStore.clients, 
        events: stateFromTheStore.events
    }
}
  

export default connect(mapStateToProps)(Client);