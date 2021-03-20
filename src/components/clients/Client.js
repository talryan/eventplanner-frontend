import React from 'react';
import { connect } from 'react-redux'
import ClientEvents from '../events/ClientEvents'
 
const Client = ({ clients, match }) => {  
  
    const id = parseInt(match.params.id)
    const client = clients.find(c => c.id === id)
   
    return (
        <div className='client-show'> 
            <h1>Client Show:</h1>
          First Name: {client.first_name} Last Name: {client.last_name}
        
        <ClientEvents client ={client} />
        
    
        </div>
    );
};

const mapStateToProps = state => {
    return { clients: state.clients }
}

export default connect(mapStateToProps)(Client);