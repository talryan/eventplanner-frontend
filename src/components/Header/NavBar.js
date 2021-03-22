import React from 'react';
import {Component} from 'react';
import {  Link } from "react-router-dom";



    export default class NavBar extends Component {
        render() {
            return (
        
                <div className='nav-display'>  
                    <div className="w3-bar w3-red w3-card w3-center-align w3-large"></div>
                            <Link className="w3-bar-item w3-button w3-padding-large w3-indigo" to="/">Home</Link> 
                            <Link className="w3-bar-item w3-button w3-padding-large w3-indigo" to="/events">Events</Link> 
                            <Link className="w3-bar-item w3-button w3-padding-large w3-indigo" to ="/clients"> Clients </Link> 
                            <Link className="w3-bar-item w3-button w3-padding-large w3-indigo" to="/clients/new">New Client</Link> 

                            
                      
                    </div>
            )
        }
    }


