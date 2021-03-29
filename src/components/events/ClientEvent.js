import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/eventActions'
import DisplayDate from '../DisplayDate'
import DisplayTime from '../DisplayTime'
// import UpdateForm from './UpdateForm'
class ClientEvent extends React.Component {
    // state = {
    //     id: parseInt(this.props.routeInfo.match.params.id),
    //     showForm: false
    // }

    // handleOnClick = () => {
    //     this.setState(prevState => ({
    //         showForm: !prevState.showForm
    //     }))
    // }

    

    // events = () => {
    //     return  this.props.events.filter(event => event.client_id === this.state.id)
    // }

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

{/*                
                <button className="btn btn-dark" onClick={this.handleOnClick} > Edit Event</button>
            {this.state.showForm ? <UpdateForm clientId = {this.events().id} /> : null} */}
            
            </div>
        )
    }
    render() {
    
    return (
        <div > 
            
            {this.eventInfo()}

        </div>

    )
    }

}
const mapStateToProps = state => {
  
    return {
        events: state.events
       
    }
}

export default connect(mapStateToProps, { fetchEvents })(ClientEvent)