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
            <h1 className='events-show-h1'>Events</h1>
            <input type="text" className="searchbar"
             placeholder = "Search By Name" 
             // eslint-disable-next-line 
             onChange={event => {setSearchTerm(event.target.value)} }/>
            { // eslint-disable-next-line 
            events.filter((val)=> {
                if (searchTerm === ""){
                return val
            }   else if (val.event_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
            }).map(event => 
                <ul key={event.id}>
                    <li >
                    <h3><Link to= {`clients/${event.client_id}/events/${event.id}`}>
                     {DisplayDate(event.date)} - {event.event_name}
                    </Link></h3>
                    </li>
                </ul>
        )}
        </div>
    );
};



const mapStateToProps = state => {
    return { events: state.events }
}

export default connect(mapStateToProps, {fetchEvents})(Events);