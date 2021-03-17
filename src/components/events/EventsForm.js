import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addEvent } from '../../actions/eventActions'

class EventsForm extends Component {

    state = { 
        date: '',
        time: '',
        total: '',
        classification: '',
        status: ''
    }

    handleChange = e => {
        const { date, value } = e.target
        this.setState({
            [date]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addEvent(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <strong> Create New Event </strong> <br/>
                <label>Date</label>
                <input type='date' value={this.state.date} onChange={this.handleChange} name='date'/>
                <br/>

                <label>Time</label>
                <input type='time' value={this.state.date} onChange={this.handleChange} name='time'/>
                <br/>

                <label>Total</label>
                <input type='numeric' value={this.state.grad_date} onChange={this.handleChange} name='total'/>
                <br/>

                <label>Classification</label>
                <input type='text' value={this.state.classification} onChange={this.handleChange} name='classification'/>
                <br/>

                <label>Status</label>
                <br/>
                    <input type='radio' value={"Tentative"} checked={this.state.status === "Tentative"} onChange={this.handleChange} name='status'/> <label> Tentative </label> 
                    <input type='radio' value={"Confirmed"} checked={this.state.status === "Confirmed"} onChange={this.handleChange} name='status'/> <label> Confirmed </label>
                    <input type='radio' value={"Closed"} checked={this.state.status === "Closed"} onChange={this.handleChange} name='status'/> <label> Closed </label> 
                    <input type='radio' value={"Cancelled"} checked={this.state.status === "Cancelled"} onChange={this.handleChange} name='status'/> <label> Cancelled </label>
                <br/>

                <input type='submit' value='Create Event' />


            </form>
        );
    }
}

export default connect(null, { addEvent })(EventsForm);