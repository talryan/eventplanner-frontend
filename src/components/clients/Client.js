import React from 'react';
import { connect } from 'react-redux'

 
const Client = ({ clients }) => {
    return (
        <div>
            <h1>Client Show:</h1>
            
            {clients.map(client => 
                <ul key={client.id}>
                    <li >
                    Show information about client/:id
                   * Create 'Add Event' button 
                    </li>
                </ul>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return { clients: state.clients }
}

export default connect(mapStateToProps)(Client);