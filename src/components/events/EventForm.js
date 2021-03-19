import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../../actions/eventActions'

class EventForm extends Component {

    state = { 
        date: '',
        time: '',
        total: '',
        classification: '',
        status: '',
        details: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addEvent(this.state)
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <strong> Create New Event </strong> <br/>
                <label>Event Name: </label>
                <input type='text' value={this.state.event_name} onChange={this.handleChange} name='event_name' required/>
                <br/>
            
                <label>Date: </label>
                <input type='date' value={this.state.date} onChange={this.handleChange} name='date' required/>
                <br/>

                <label>Time: </label>
                <input type='time' value={this.state.time} onChange={this.handleChange} name='time' required/>
                <br/>

                <label>Total: $</label>
                <input type='numeric' value={this.state.grad_date} onChange={this.handleChange} name='total'required/>
                <br/>

                <label>Occasion: </label>
                <input type='text' value={this.state.classification} onChange={this.handleChange} name='classification'required/>
                <br/>

                <label>Status: </label>
                <br/>
                    <input type='radio' value={"Tentative"} checked={this.state.status === "Tentative"} onChange={this.handleChange} name='status'/> <label> Tentative </label> 
                    <input type='radio' value={"Confirmed"} checked={this.state.status === "Confirmed"} onChange={this.handleChange} name='status'/> <label> Confirmed </label>
                    <input type='radio' value={"Closed"} checked={this.state.status === "Closed"} onChange={this.handleChange} name='status'/> <label> Closed </label> 
                    <input type='radio' value={"Cancelled"} checked={this.state.status === "Cancelled"} onChange={this.handleChange} name='status'/> <label> Cancelled </label>
                <br/>

                <label>Details:</label>
                <input type='text' value={this.state.details} onChange={this.handleChange} name='details' required/> <br />

                <input type='submit' value='Create Event' />

            
            </form>
          
        );
    }
}

export default connect(null, { addEvent })(EventForm);