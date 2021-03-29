import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateEvent } from '../../actions/eventActions'

class UpdateForm extends Component {

    state = {  
        event_name: this.props.event.event_name,
        date: this.props.event.date,
        time: this.props.event.time,
        total: this.props.event.total,
        status: this.props.event.status,
        details: this.props.event.details,
        client_id: this.props.clientId
    }

    handleChange = e => {
      
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateEvent(this.state) 
        this.setState({   
        event_name: '',
        date: '',
        time: '',
        total: '',
        status: '',
        details: ''
        })
       
    }

    render() {
        return (
            <form className= "Update-Form" onSubmit={this.handleSubmit}>
                <h3 className='create-event-h3'> Edit Event </h3> <br/>
                <label>Event Name: </label>
                <input type='text' value={this.state.event_name} onChange={this.handleChange} name='event_name' required/>
                <br/>
            
                <label>Date: </label>
                <input type='date' value={this.state.date} onChange={this.handleChange} start='Date.now' name='date' required/>
                <br/>

                <label>Time: </label>
                <input type='time' value={this.state.time} onChange={this.handleChange} name='time' required/>
                <br/>

                <label>Total: $</label>
                <input type='numeric' value={this.state.total} onChange={this.handleChange} name='total'required/>
                <br/>

            

                <label>Status: </label>
                <br/>
                    <input type='radio' className = 'tentative-selection' value={"Tentative"} checked={this.state.status === "Tentative"} onChange={this.handleChange} name='status'/> <label> Tentative </label> 
                    <input type='radio' className = 'confirmed-selection' value={"Confirmed"} checked={this.state.status === "Confirmed"} onChange={this.handleChange} name='status'/> <label> Confirmed </label>
                    <input type='radio' className = 'closed-selection' value={"Closed"} checked={this.state.status === "Closed"} onChange={this.handleChange} name='status'/> <label> Closed </label> 
                    <input type='radio' className = 'cancelled-selection' value={"Cancelled"} checked={this.state.status === "Cancelled"} onChange={this.handleChange} name='status'/> <label> Cancelled </label>
                <br/>

                <label>Details:</label>
                <input type='text' value={this.state.details} onChange={this.handleChange} name='details' required/> <br />

                <input className='btn btn-dark' type='submit' value='Edit Event' />

            
            </form>
          
        );
    }
}


const mapStateToProps = ({events}, ownProps) => {
    console.log(ownProps.routeInfo)
    const event = events.find(thisEvent => thisEvent.id === parseInt(ownProps.routeInfo.match.params.id))
    return {event}
}

export default connect(mapStateToProps,{ updateEvent })(UpdateForm);