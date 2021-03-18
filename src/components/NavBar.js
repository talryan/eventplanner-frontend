import React from 'react';
import {Component} from 'react';
import {  Link } from "react-router-dom";



    export default class NavBar extends Component {
        render() {
            return (
        
                    <div>
                        <ul>
                        <li>
                            <Link to="/">Home</Link> ||
                            <Link to="/events">Events</Link> ||
                            <Link to ="/clients"> Clients </Link> ||
                            <Link to="/events/new">New Event</Link> || 
                            <Link to="/clients/new">New Client</Link> || 

                            
                        </li>
                        </ul>
                    </div>
            )
        }
    }
