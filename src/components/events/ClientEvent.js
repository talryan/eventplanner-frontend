import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/eventActions'
import DisplayDate from '../DisplayDate'
import DisplayTime from '../DisplayTime'

class ClientEvent extends React.Component {


    eventInfo() {

        let event = this.props.event
        return (
            <div className='client-event'> 
            <h2> Event Details:</h2>
                <h3>Name: {event.event_name} </h3><br />
                <h3>Date: {DisplayDate(event.date)} </h3> <br />
                <h3>Time: {DisplayTime(event.time)}</h3> <br />
                <h3>Status: {event.status}</h3> <br />
                <h3> Details: {event.details}</h3><br />
                <h3>Total: ${event.total}</h3><br />
            
            </div>
        )
    }
    render() {
    
        return (
            <div > 
                
                {this.props.event ? this.eventInfo() : <h1> Not Found </h1>}

            </div>

        )
    }

}
    const mapStateToProps = ({events}, ownProps) => {
        const event = events.find(thisEvent => thisEvent.id === parseInt(ownProps.routeInfo.match.params.id))
    
        return {event}
    }

export default connect(mapStateToProps, { fetchEvents })(ClientEvent)