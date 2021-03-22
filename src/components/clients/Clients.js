import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {useState} from 'react'
 
const Clients = ({ clients }) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='clients-index'> 
            <h1 className = 'clients-index-title'>Rolodex:</h1>
            
            <input type="text" className="searchbar"
             placeholder = "Search By Name" 
             // eslint-disable-next-line 
             onChange={event => {setSearchTerm(event.target.value)} }/>
            
            { // eslint-disable-next-line 
            clients.filter((val)=> {
                if (searchTerm === ""){
                return val
            }   else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
            }).map(client => 
                <ul key={client.id}>
                    <li >
                   <h3> <Link to= {`clients/${client.id}`}>
                        {client.last_name},{client.first_name}
                    
                    </Link></h3>
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