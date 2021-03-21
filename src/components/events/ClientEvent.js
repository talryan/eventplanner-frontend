import React from 'react';
import { connect } from 'react-redux';
import DisplayDate from '../DisplayDate'
import DisplayTime from '../DisplayTime'
class ClientEvent extends React.Component {

    eventInfo() {

        let event = this.props.events.find(event => event.id === parseInt(this.props.routeInfo.match.params.id))
        return (
            <div className='client-event'> 
                Name: {event.event_name} <br />
                Date: {DisplayDate(event.date)}  <br />
                Time: {DisplayTime(event.time)} <br />
                Status: {event.status} <br />
                Details: {event.details}<br />
                Total: ${event.total}<br />

                <button>Edit Event</button>

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