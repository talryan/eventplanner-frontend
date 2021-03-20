import React from 'react';
import { connect } from 'react-redux';
import DisplayDate from '../DisplayDate'

class ClientEvent extends React.Component {

    eventInfo() {

        let event = this.props.events.find(event => event.id === parseInt(this.props.routeInfo.match.params.id))
        console.log(event)
        return (
            <div className='client-event'> 
                Date: {DisplayDate(event.date)}  <br />
                Time: {event.time}

            </div>
        )
    }
    render() {
        console.log(this.props)
    return (
        <div className='no-event'> 
            <h1> WE DID IT! </h1>
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