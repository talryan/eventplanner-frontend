import React, { Component } from 'react';
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'


class MainContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div>
                <Home />
                <Dashboard />
            </div>
        );
    }
}

export default (MainContainer);