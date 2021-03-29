import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchClients} from '../actions/clientActions'
import { Route, Switch } from 'react-router-dom';
import Clients from '../components/clients/Clients'
// import EventsContainer from '../containers/EventsContainer'
import ClientForm from '../components/clients/ClientForm'
import Client from '../components/clients/Client'

import ClientEvent from '../components/events/ClientEvent'

class ClientsContainer extends Component {
    componentDidMount() {
        this.props.fetchClients()
    }
    render() {
        return (
            <div className='clients-container'> 
                <Switch>
                    <Route exact path='/clients/new' component={ClientForm} />
                    <Route exact path='/clients/:id' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const client = this.props.clients.find(c => c.id === id)
                        return !! client ? <Client routeInfo={routeInfo} client={client}/> :
                        <div>Loading...</div>
                    } } />
                    <Route exact path='/clients/:id/events/:id' component={(routeInfo)=> {
                    return <ClientEvent routeInfo={routeInfo} /> 
                    //    return <ClientEvent routeInfo={routeInfo} /> 
                    } } />

                    <Route exact path='/clients' component={ Clients } />
                   
                </Switch>
               
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        clients: state.clients,
       
    }
}

export default connect(mapStateToProps, {fetchClients})(ClientsContainer);