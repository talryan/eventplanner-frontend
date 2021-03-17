import React from 'react';
import { connect } from 'react-redux'

const ClientList = ({ clients }) => {
    return (
        <div>
            <h1>Clients List:</h1>
            {clients.map(client => 
                <ul key={client.id}>
                    <li >
                        {client.last_name},{client.first_name} 
                    </li>
                </ul>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return { clients: state.clients }
}

export default connect(mapStateToProps)(ClientList);