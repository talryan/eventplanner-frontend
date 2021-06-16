import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {useState} from 'react'

 
const Clients = ({ clients }) => {
    const [searchTerm, setSearchTerm] = useState('')
    

    return (
        <div className='clients-index'> 
            <h3 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ROLODEX:</span></h3>
            
            <input type="text" className="searchbar" placeholder = "Search By Name" value={searchTerm}
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
                   <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide"> <Link to= {`clients/${client.id}`}>
                        {client.last_name},{client.first_name} </Link> </span>  </h5>
                
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