import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addClient } from '../../actions/clientActions'


class ClientForm extends Component {

    state = { 
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        company_name: '',
        inputValue: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addClient(this.state)
       this.setState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        company_name: ''
       })
    }

    render() {
        return (
            <form className='client-form' onSubmit={this.handleSubmit}>
                <h2 className="w3-center w3-padding-64"><span className="w3-tag w3-wide"> Create New Client </span></h2> <br/>
                <label>First Name </label>
                <input type='text' value={this.state.first_name} onChange={this.handleChange} name='first_name' required/>
                <br/>

                <label>Last Name </label>
                <input type='text' value={this.state.last_name} onChange={this.handleChange} name='last_name' required/>
                <br/>

                <label>Company Name</label>
                <input type='text' value={this.state.company_name} onChange={this.handleChange} name='company_name'/>
                <br/>

                <label>Phone Number</label>
                <input type='text' value={this.state.phone_number} onChange={this.handleChange} name='phone_number'required/>
                <br/>

                <label>Email</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'required/>
                <br/><br />
             

                <input className="btn btn-dark" type='submit' value='Create Client' />

            
            </form>
          
        );
    }
}

export default connect(null, { addClient })(ClientForm);