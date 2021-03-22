    import React from 'react';
    import { connect } from 'react-redux'
    import {Link} from 'react-router-dom'
    import EventForm from '../events/EventForm'
    import DisplayDate from '../DisplayDate'

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
                    return <div key={event.id}>
                        
                    <h3> <Link to= {`${this.props.routeInfo.match.url}/events/${event.id}`}> {DisplayDate(event.date)} - {event.event_name}</Link> </h3><br /> 
                    </div>
            }
            )
        }
            
        }
        render() {
        return (
            <div className='client-show'> 
                
                    <h2> <strong>Contact Infomation:</strong></h2>
                    <h3> <strong>Name:</strong> {this.client().first_name} {this.client().last_name} </h3>
                    <h3> <strong>Email:</strong> {this.client().email} </h3>
                    <h3> <strong>Phone Number:</strong> {this.client().phone_number}</h3> 
                    <h3><strong>Company:</strong> </h3><h4> {this.client().company_name}</h4>
                    <h2><strong>Events:</strong></h2> 

                    {this.mapEvents()}
             
            
        

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