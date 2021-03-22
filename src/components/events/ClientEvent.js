import React from 'react';
import { connect } from 'react-redux';
import DisplayDate from '../DisplayDate'
import DisplayTime from '../DisplayTime'
class ClientEvent extends React.Component {

    eventInfo() {

        let event = this.props.events.find(event => event.id === parseInt(this.props.routeInfo.match.params.id))
        return (
            <div className='client-event'> 
            <h2> Event Details:</h2>
                <h3>Name: {event.event_name} </h3><br />
                <h3>Date: {DisplayDate(event.date)} </h3> <br />
                <h3>Time: {DisplayTime(event.time)}</h3> <br />
                <h3>Status: {event.status}</h3> <br />
                <h3> Details: {event.details}</h3><br />
                <h3>Total: ${event.total}</h3><br />

                <button type="button" class="btn btn-dark">Edit Event</button>

            </div>
        )
    }
    render() {
        console.log(this.props)
    return (
        <div className='no-event'> 
            
            {this.props ? this.eventInfo() : <h1> no events</h1>}

        </div>

    )
    }

}
const mapStateToProps = state => {
  
    return {
        events: state.events,
       
    }
}


export default connect(mapStateToProps)(ClientEvent)