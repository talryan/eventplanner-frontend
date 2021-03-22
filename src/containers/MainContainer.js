import React, { Component } from 'react';
import Home from '../components/Home'



class MainContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div className='main-container'> 
                <Home />
                
                
            </div>
        );
    }
}

export default (MainContainer);