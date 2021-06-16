import React, { Component } from 'react';
import Home from '../components/Home'
import Header from '../components/Header/Header'


class MainContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div className='main-container'> 
            
                <Header />
               
                <Home />
            </div>
        );
    }
}

export default (MainContainer);