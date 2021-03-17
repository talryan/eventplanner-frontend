import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 
const ClientList = ({ clients }) => {
    return (
        <div>
            <h1>Clients List:</h1>
            {clients.map(client => 
                <ul key={client.id}>
                    <li >
                    <Link to= {`clients/${client.id}`}>
                       
                        {client.last_name},{client.first_name}
                    
                    </Link>
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