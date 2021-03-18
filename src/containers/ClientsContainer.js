import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchClients} from '../actions/clientActions'
import { Route, Switch } from 'react-router-dom';
import Clients from '../components/clients/Clients'
import EventsContainer from '../containers/EventsContainer'

class ClientsContainer extends Component {
    componentDidMount() {
        this.props.fetchClients()
    }
    render() {
        return (
            <div>
                   <Switch>
                    <Route path='/clients/:id/events' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const client = this.props.clients.find(c => c.id === id)
                        console.log(routeInfo)
                        return !! client ? <EventsContainer routeInfo={routeInfo} client={client}/> :
                        <div>Loading...</div>
                    } } />
                    <Route exact path='/clients' component={ Clients } />
                </Switch>
               
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {clients: state.clients}
}

export default connect(mapStateToProps, {fetchClients})(ClientsContainer);