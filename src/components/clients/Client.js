import React from 'react';
import { connect } from 'react-redux'
import EventList from '../events/EventList'
 
const Client = ({ clients, match }) => {  
  
    const id = parseInt(match.params.id)
    const client = clients.find(c => c.id === id)
    console.log(client)
    return (
        <div>
            <h1>Client Show:</h1>
          First Name: {client.first_name} Last Name: {client.last_name}
        
        <EventList client ={client} />
        
    
        </div>
    );
};

const mapStateToProps = state => {
    return { clients: state.clients }
}

export default connect(mapStateToProps)(Client);