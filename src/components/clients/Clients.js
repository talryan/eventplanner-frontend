import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 
const Clients = ({ clients }) => {
    return (
        <div>
            <h1>Please Select A Client :</h1>
            <h4> **Add search function here**</h4>
            {clients.map(client => 
                <ul key={client.id}>
                    <li >
                    <Link to= {`clients/${client.id}/events`}>
                       
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

export default connect(mapStateToProps)(Clients);