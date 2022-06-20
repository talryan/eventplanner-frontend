import React from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../../actions/eventActions'
import DisplayDate from '../DisplayDate'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Events = ({events}) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
          
        <div className= 'all-events-show'>
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">EVENT LIST</span></h5>
            <input input class="w3-input w3-padding-16 w3-border" type="text"
             placeholder = "Search By Name" 
             onChange={event => {setSearchTerm(event.target.value)} }/>
    
            {// eslint-disable-next-line 
                       events.filter((val)=> {
                
                if (searchTerm === ""){
                return val
            }   else if (val.event_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
            }).map(event => 
                <ul key={event.id}>
                    
                    <h3 className="w3-center w3-padding-64"><span className="w3-tag w3-wide"><Link to= {`clients/${event.client_id}/events/${event.id}`}>
                     {DisplayDate(event.date)} - {event.event_name}
                    </Link></span></h3>
                    
                </ul>
        )}
        </div>
    );
};



const mapStateToProps = state => {
    return { events: state.events }
}

export default connect(mapStateToProps, {fetchEvents})(Events);