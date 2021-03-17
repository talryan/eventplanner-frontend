import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchClients} from '../actions/clientActions'
import {
    Link
  } from "react-router-dom";
import ClientList from '../components/clients/Client'

class ClientsContainer extends Component {
    componentDidMount() {
        this.props.fetchClients()
    }
    render() {
        return (
            <div>
                <ClientList />
                Put list of clients shit <br />
                 <Link to="/clients/new">New Client</Link> <br />
            </div>
        );
    }
}

export default connect(null, {fetchClients})(ClientsContainer);