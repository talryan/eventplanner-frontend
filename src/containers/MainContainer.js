import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Dashboard from '../components/Dashboard'


class MainContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div>
                  <NavBar />
                  <Dashboard />
          
            
            </div>
        );
    }
}

export default (MainContainer);